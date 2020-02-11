import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthRoutesGuard, RedirectGuard, SEOResolver} from '@signature-it/ngx-generic';
import { MainLayoutComponent } from '../components/layout/main/main';
import { ProductPageResolver } from '@signature-it/ngx-catalogue';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../modules/homepage.module').then(m => m.HomepageModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'login',
                loadChildren: () => import('../modules/login.module').then(m => m.LoginModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'registration',
                loadChildren: () => import('../modules/registration.module').then(m => m.RegistrationModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'forget-password',
                loadChildren: () => import('../modules/forget-password.module').then(m => m.ForgetPasswordModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'change-password',
                loadChildren: () => import('../modules/change-password.module').then(m => m.ChangePasswordModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'activate-account',
                loadChildren: () => import('../modules/activate-account.module').then(m => m.ActivateAccountModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'terms',
                loadChildren: () => import('../modules/terms.module').then(m => m.TermsModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'catalogue',
                loadChildren: () => import('../modules/catalogue/catalogue.module').then(m => m.CatalogueMainLayoutModule)
            },
            {
                path: 'account',
                canActivate: [AuthRoutesGuard],
                loadChildren: () => import('../modules/account/account.module').then(m => m.AccountModule)
            },
            {
                path: 'business',
                loadChildren: () => import('../modules/business/business.module').then(m => m.BusinessModule)
            },
            {
                path: 'cart',
                loadChildren: () => import('../modules/cart/layout.module').then(m => m.CartLayoutModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'product-page/:id',
                loadChildren: () => import('../modules/product-page.module').then(m => m.productPageModule),
                resolve: { id: ProductPageResolver}
            },
            {
                path: ':leafName/product-page/:id',
                loadChildren: () => import('../modules/product-page.module').then(m => m.productPageModule),
                resolve: { id: ProductPageResolver}
            },
            {
                path: 'content/page/:name',
                loadChildren: () => import('../modules/cms-page.module').then(m => m.CmsPageModule)
            },
            {
                path: 'contact-us',
                loadChildren: () => import('../modules/contact-us.module').then(m => m.ContactUsModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'quick-pad',
                loadChildren: () => import('../modules/quick-pad.module').then(m => m.QuickPadModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: '401',
                loadChildren: () => import('../modules/error/unauthorized-user.module').then(m => m.ErrorUnauthorizedUserModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: '403',
                loadChildren: () => import('../modules/error/forbidden-page.module').then(m => m.ErrorForbiddenPageModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: '404',
                canActivate: [RedirectGuard],
                canActivateChild: [RedirectGuard],
                loadChildren: () => import('../modules/error/not-found-page.module').then(m => m.NotFoundErrorPageModule),
                resolve: { seo: SEOResolver }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}
