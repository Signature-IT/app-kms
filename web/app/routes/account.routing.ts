import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AccountPortalLayoutComponent } from "@signature-it/ngx-generic";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AccountPortalLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('../modules/account/dashboard.module').then(m => m.AccountDashboardModule),
            },
            {
                path: 'profile-details',
                loadChildren: () => import('../modules/account/profileDetails.module').then(m => m.ProfileDetailsModule),
            },
            {
                path: 'favorites',
                loadChildren: () => import('../modules/account/favorites.module').then(m => m.FavoritesModule)
            },
            {
                path: 'previous-orders',
                loadChildren: () => import('../modules/account/previousOrders.module').then(m => m.PreviousOrdersModule)
            },
            {
                path: ':name',
                loadChildren: () => import('../modules/cms-page.module').then(m => m.CmsPageModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
/**
 * @extends AccountRoutingModuleGeneric
 */
export class AccountRoutingModule { }