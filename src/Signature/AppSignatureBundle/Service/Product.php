<?php

namespace Signature\AppSignatureBundle\Service;

use Signature\ProductBundle\Service\SharedCngPricing;

class Product extends \Signature\ProductBundle\Service\Product {

    public function updateSpecialFields($data, $cng, $originReq, $insert = false) {
        if ($data['product_id'] > 0) {
            $attributes = [
                'insurance_type' => $cng->getAttribute('insurance_type'),
                'department' => $cng->getAttribute('department'),
            ];
            if(!empty($data['ans']['customer_first_name'])){
                if($data['ans']['moto_model'] == ''){
                    $attributes['lead_status'] = 'first_lead';
                } elseif(empty($data['ans']['drivers'])){
                    $attributes['lead_status'] = 'lead_in_process';
                } else {
                    $attributes['lead_status'] = 'suggestion';
                    $this->saveLeadPrices($data['product_id'], $cng->getIdValue(), $data['ans']);
                }
            }
            if($insert){
                $user = \User::current();
                $agentParam = $originReq['afid'] ?: '';
                $createdBy = $agentId = 0;
                $createdByType = 'Customer';
                if($agentParam){
                    $agent = \SigSystem::current()->newUser()->find(['c_r2' => $agentParam]);
                    $agentId = $agent->getIdValue();
                    if(!$user->getIdValue()){
                        $createdByType = 'Agent';
                        $createdBy = $agentId;
                        $agentId = 0;
                    }
                }
                if($user->getIdValue()){
                    $createdByType = 'Employee';
                    $createdBy = $user->getIdValue();
                }
                $attributes = array_merge($attributes, [
                    'created_by' => $createdBy,
                    'agent_id' => $agentId,
                    'created_by_type' => $createdByType,
                    'source_lead' => $GLOBALS['fe_system'] . "/cng-page/" . $cng->getIdValue() . "?" . implode("&", array_map(function($value, $key){
                            return "$key=$value";
                        }, $originReq, array_keys($originReq))),
                    ]);
            }

            $query = "
                UPDATE products SET
                    " . implode(", ", array_map(function ($field) {
                    return "`$field` = :$field";
                }, array_keys($attributes))) . "
                WHERE id = {$data['product_id']}
            ";
            $this->getTools()->getDbal()->executeQuery($query, $attributes);
        }
    }

    protected function saveLeadPrices($productId, $cngProductId, $productData){
        $query = "
            SELECT * FROM udi_lead_prices 
            WHERE product_id = $productId
            LIMIT 1
        ";
        if($this->getTools()->getDbal()->executeQuery($query)->rowCount() > 0){
            return;
        }
        $groups = [];
        switch($cngProductId){
            case 332:
                $groups = [20335, 20336];
                break;
        }
        if(!empty($groups)){
            $query = "
                SELECT id, comp_price_template_var
                FROM products
                WHERE group_id IN (" . implode(", ", $groups) . ")
                AND unavailability_type = 0
            ";
            $comps = $this->getTools()->getDbal()->executeQuery($query)->fetchAll();
            $prices = [];
            if(!empty($comps)){
                SharedCngPricing::initialize(SharedCngPricing::APP_SRC, $this->getTools()->getDbal(), $this->getTools()->getLang()->getAttribute('lang_code'));
                foreach($comps as $comp){
                    if(!empty($comp['comp_price_template_var'])){
                        $price = SharedCngPricing::calcPricingByTemplateVar($comp['comp_price_template_var'], $productData);
                        $prices[] = "($productId, {$comp['id']}, {$price->price})";
                    }
                }
                if(!empty($prices)){
                    $query = "
                        INSERT INTO udi_lead_prices (product_id, comp_id, price) VALUES
                        " . implode(", ", $prices) . "
                    ";
                    $this->getTools()->getDbal()->executeQuery($query);
                }
            }
        }
    }
}