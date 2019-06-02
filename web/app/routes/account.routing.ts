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
                loadChildren: '../modules/account/dashboard.module#AccountDashboardModule',
            },
            {
                path: 'profile-details',
                loadChildren: '../modules/account/profileDetails.module#ProfileDetailsModule',
            },
            {
                path: 'favorites',
                loadChildren: '../modules/account/favorites.module#FavoritesModule'
            },
            {
                path: 'previous-orders',
                loadChildren: '../modules/account/previousOrders.module#PreviousOrdersModule'
            },
            {
                path: ':name',
                loadChildren: '../modules/cms-page.module#CmsPageModule',
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