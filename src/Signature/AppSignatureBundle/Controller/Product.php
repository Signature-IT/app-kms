<?php
/**
 * Created by JetBrains PhpStorm.
 * User: yossi
 * Date: 11/28/19
 * Time: 3:22 PM
 * To change this template use File | Settings | File Templates.
 */

namespace Signature\AppSignatureBundle\Controller;
use Signature\AppSignatureBundle\Service;

class Product extends \Signature\ProductBundle\Controller\Product {
    /**
     * @return Service\Product
     */
    protected function getService() {
        if( !$this->service ){
            $this->service = new Service\Product($this->getTools());
        }
        return $this->service;
    }


    public function afterInsertCngProduct($data, $cng, $originReq) {
        $this->getService()->updateSpecialFields($data, $cng, $originReq, true);
    }

    public function afterUpdateCngProduct($data, $cng, $originReq) {
        $this->getService()->updateSpecialFields($data, $cng, $originReq);
    }
}
