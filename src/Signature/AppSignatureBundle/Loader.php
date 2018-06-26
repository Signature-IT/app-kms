<?php

namespace Signature\AppSignatureBundle;

use Signature\CoreBundle\Model\BundleLoader;

/**
 * Created by Dima Hershkovitz <dimah@signature-it.com> using Bundle generator script.
 * Date: 2017-06-07
 */
class Loader extends BundleLoader {

    /**
     * @return string Real path of this bundle’ root directory.
     */
    public static function getDirectory() {
        return realpath(__DIR__);
    }

    /**
     * @return array List of available routes as YAML configs (must be defined in overriding concrete bundle loader class)
        Keeping the empty yml for custom APIs.
     */
    public static function getRoutes() {
        return [];
    }

    /**
     * @return array List of available controllers as YAML configs (must be defined in overriding concrete bundle loader class)
     */
    public static function getControllers() {
        return [];
    }

    /**
     * @return array List of available TWIG templates paths (must be defined in overriding concrete bundle loader class)
     */
    public static function getTemplatesPath() {
        return ['../../web/views/'];
    }
}
