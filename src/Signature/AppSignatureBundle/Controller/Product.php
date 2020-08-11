<?php
/**
 * Created by JetBrains PhpStorm.
 * User: yossi
 * Date: 11/28/19
 * Time: 3:22 PM
 * To change this template use File | Settings | File Templates.
 */

namespace Signature\AppSignatureBundle\Controller;

require_once('vendor/signature/system/common.php');

class Product extends \Signature\ProductBundle\Controller\Product {

    protected $wfModule = null;

    /**
     * @return \ModuleWorkflowV2|\Module
     */
    public function getWfModule() {
        if( !$this->wfModule ) {
            $this->wfModule = \Module::createByName('ModuleWorkflowV2', \SigSystem::current()->getContext());
        }
        return $this->wfModule;
    }

    public static function getPricesByIds($productList) {
        $product_ids = $productList;
        $mess = array();

        if (in_array(false, array_map('is_numeric', $product_ids))) {
            throw new \InvalidArgumentException();
        }
        $sigSystem = \SigSystem::current();
        $context = $sigSystem->getContext();
        $products_prices =  new \DOProductPriceWithDiscount_Homecenter($context);
        foreach ( $product_ids as $productId ) {
            $product = $sigSystem->newProduct()->find(array(\Product::ATTR_ID => array($productId)));
            $context->setProduct($product->first());
            if ($productId = $product->getIdValue()) {
                $price = $products_prices->_getAvailablePrices();
                $base_price = $price[\DBOHomeCenterDiscountUsers::ENUM_BASE_PRICE]['price'];
                $site_price = $price[\DBOHomeCenterDiscountUsers::ENUM_SITE_PRICE]['price'];
                $special_price = $price[\DBOHomeCenterDiscountUsers::ENUM_SPECIAL_PRICE]['price'];
                $special_price_with_discount = $price[\DBOHomeCenterDiscountUsers::ENUM_SPECIAL_PRICE_WITH_DISCOUNT]['price'];
                $mess[$productId] = array(
                    'id' => $productId,
                    'stripedPrice' => $base_price && $site_price ? $base_price : NULL,
                    'price' => $base_price && $site_price ? $site_price : $base_price,
                    'clubStripedPrice' => $special_price && $special_price_with_discount ? $special_price : NULL,
                    'clubPrice' => $special_price && $special_price_with_discount ? $special_price_with_discount : $special_price,
                    'currency' => $price[\DBOHomeCenterDiscountUsers::ENUM_BASE_PRICE]['currency'],
                    'exclusive' => $product->getAttribute('Exclusive') ? : NULL,
                );
            } else {
                $mess[$productId] = 'Product not found';

            }
            $p[] = $mess[$productId];;
        }
        return $p;
    }

    public function afterInsertCngProduct($data, $cng, $originReq) {
        if($data['product_id'] > 0){
            $this->getWfModule()->insertWorkflow($cng->getAttribute('workflow_name'), $data['product_id'], $originReq['wf_line']);

            $do_solr = \DomainFactory::create()->newDOSolr(\SigSystem::current()->getContext());
            if($progressDetails = $do_solr->_solrInProgress()){
                return $progressDetails;
            }

            exec('php ' . \SigSystem::current()->getRootPath() . '/tools/console.php solr:add:product ' . $data['product_id']);
        }
    }

    public function afterUpdateCngProduct($data, $cng, $originReq) {
        if($data['product_id'] > 0){
            $do_solr = \DomainFactory::create()->newDOSolr(\SigSystem::current()->getContext());
            if($progressDetails = $do_solr->_solrInProgress()){
                return $progressDetails;
            }
            exec('php ' . \SigSystem::current()->getRootPath() . '/tools/console.php solr:remove:product ' . $data['product_id']);
            exec('php ' . \SigSystem::current()->getRootPath() . '/tools/console.php solr:add:product ' . $data['product_id']);
        }
    }
}
