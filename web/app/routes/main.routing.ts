import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthRoutesGuard } from "@signature-it/ngx-generic";
import { MainLayoutComponent } from "../components/layout/main/main";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../modules/homepage.module').then(m => m.HomepageModule)
            },
            {
                path: 'login',
                loadChildren: () => import('../modules/login.module').then(m => m.LoginModule)
            },
            {
                path: 'registration',
                loadChildren: () => import('../modules/registration.module').then(m => m.RegistrationModule)
            },
            {
                path: 'forget-password',
                loadChildren: () => import('../modules/forget-password.module').then(m => m.ForgetPasswordModule)
            },
            {
                path: 'change-password',
                loadChildren: () => import('../modules/change-password.module').then(m => m.ChangePasswordModule)
            },
            {
                path: 'activate-account',
                loadChildren: () => import('../modules/activate-account.module').then(m => m.ActivateAccountModule)
            },
            {
                path: 'terms',
                loadChildren: () => import('../modules/terms.module').then(m => m.TermsModule)
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
                loadChildren: () => import('../modules/cart/layout.module').then(m => m.CartLayoutModule)
            },
            {
                path: 'product-page/:id',
                loadChildren: () => import('../modules/product-page.module').then(m => m.productPageModule)
            },
            {
                path: 'content/page/:name',
                loadChildren: () => import('../modules/cms-page.module').then(m => m.CmsPageModule)
            },
            {
                path: 'contact-us',
                loadChildren: () => import('../modules/contact-us.module').then(m => m.ContactUsModule)
            },
            {
                path: 'quick-pad',
                loadChildren: () => import('../modules/quick-pad.module').then(m => m.QuickPadModule)
            },
            {
                path: '401',
                loadChildren: () => import('../modules/error/unauthorized-user.module').then(m => m.ErrorUnauthorizedUserModule)
            },
            {
                path: '403',
                loadChildren: () => import('../modules/error/forbidden-page.module').then(m => m.ErrorForbiddenPageModule)
            },
            {
                path: '404',
                loadChildren: () => import('../modules/error/not-found-page.module').then(m => m.NotFoundErrorPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {}
