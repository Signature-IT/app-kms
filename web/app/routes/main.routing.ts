import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthRoutesGuard } from "@signature-it/ngx-generic";
import { MainLayoutComponentGeneric } from "@signature-it/ngx-generic/web/app/components/layouts/main/main";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponentGeneric,
        children: [
            {
                path: '',
                loadChildren: '../modules/homepage.module#HomepageModule'
            },
            {
                path: 'login',
                loadChildren: '../modules/login.module#LoginModule'
            },
            {
                path: 'registration',
                loadChildren: '../modules/registration.module#RegistrationModule'
            },
            {
                path: 'forget-password',
                loadChildren: '../modules/forget-password.module#ForgetPasswordModule'
            },
            {
                path: 'change-password',
                loadChildren: '../modules/change-password.module#ChangePasswordModule'
            },
            {
                path: 'terms',
                loadChildren: '../modules/terms.module#TermsModule'
            },
            {
                path: 'catalogue',
                loadChildren: '../modules/catalogue/catalogue.module#CatalogueMainLayoutModule'
            },
            {
                path: 'account',
                canActivate: [AuthRoutesGuard],
                loadChildren: '../modules/account/account.module#AccountModule'
            },
            {
                path: 'business',
                loadChildren: '../modules/business/business.module#BusinessModule'
            },
            {
                path: 'cart',
                loadChildren: '../modules/cart/layout.module#CartLayoutModule'
            },
            {
                path: 'product-page/:id',
                loadChildren: '../modules/product-page.module#productPageModule'
            },
            {
                path: 'content/page/:name',
                loadChildren: '../modules/cms-page.module#CmsPageModule'
            },
            {
                path: '401',
                loadChildren: '../modules/error/unauthorized-user.module#ErrorUnauthorizedUserModule'
            },
            {
                path: '403',
                loadChildren: '../modules/error/forbidden-page.module#ErrorForbiddenPageModule'
            },
            {
                path: '404',
                loadChildren: '../modules/error/not-found-page.module#NotFoundErrorPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
/**
 * @extends MainRoutingModuleGeneric
 */
export class MainRoutingModule {}
