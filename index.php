<?php
/**
 * Created by Dima Hershkovitz <dimah@signature-it.com> using Bundle generator script.
 * Date: 2017-06-07
 */

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Signature\CoreBundle\Application\BaseApplication;
use Signature\AuthorityBundle\SigAuthenticationEntryPoint;
use Signature\AuthorityBundle\Provider\SigSecurityServiceProvider;
use Signature\AuthorityBundle\Provider\UserProvider;
use Signature\UserBundle\Service;

require_once __DIR__ . '/bootstrap.php';

ini_set("log_errors", 1);
ini_set("error_log", "/var/tmp/generic/log/"."error_".date('Y-m-d').".txt");

$app = new BaseApplication();

$app->before(function(Request $request, BaseApplication $app) {
    try {
        if($request->getMethod() != Request::METHOD_OPTIONS) {
            // checking if the system has not expired session for logged user
            if (!Service\User::current($app)->isSessionLoggedIn()) {
                $path = $request->getPathInfo();
                // if trying to access to private REST APIs
                if (!(bool)preg_match('/^\/public|external\//', $path) && !(bool)preg_match('/^\/$/', $path)) {
                    // poker face on it.
                    return new JsonResponse(
                        SigAuthenticationEntryPoint::MSG_UNAUTHORIZED,
                        Response::HTTP_UNAUTHORIZED
                    );
                }
            }
        }
    } catch (\Exception $e) {
        error_log($e->getMessage()."\n".$e->getTraceAsString());
        return new Response(
            $e->getMessage(),
            $e->getCode()>0?$e->getCode():Response::HTTP_INTERNAL_SERVER_ERROR
        );
    }
});

$app->register(new SigSecurityServiceProvider(),
    [
        'security.firewalls' => [
            'external' => [
                'pattern' => '^\/external\/.*$',
                'http' => true,
                'users' => $app->share(function ($app) {
                    return new UserProvider($app);
                })
            ]
        ]
    ]);

$app->after(function (Request $request, Response $response) {
    $response->headers->set("Access-Control-Allow-Origin", $_SERVER['HTTP_ORIGIN'] );
    $response->headers->set("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    $response->headers->set("Access-Control-Allow-Headers","origin, content-type, accept");
    $response->headers->set("Access-Control-Allow-Credentials", "true");
});

/** Register generic bundles */
Signature\LanguageBundle\Loader::injectInto($app);
Signature\CMSBundle\Loader::injectInto($app);
Signature\MenuBundle\Loader::injectInto($app);
Signature\UserBundle\Loader::injectInto($app);
Signature\AuthorityBundle\Loader::injectInto($app);
Signature\CartBundle\Loader::injectInto($app);
Signature\QueryTable\BridgeBundle\Loader::injectInto($app);
Signature\AccountBundle\Loader::injectInto($app);
Signature\ProductBundle\Loader::injectInto($app);

/** Register bundle's overrides */
//Signature\AppSignatureBundle\Loader::injectInto($app);

$app->run();