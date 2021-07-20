<?php

namespace Signature\AppSignatureBundle\Service;

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
}