import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { AccountPortalLayoutComponent, SEOResolver } from "@signature-it/ngx-generic";

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
                resolve: { seo: SEOResolver }
            },
            {
                path: 'profile-details',
                loadChildren: () => import('../modules/account/profileDetails.module').then(m => m.ProfileDetailsModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'favorites',
                loadChildren: () => import('../modules/account/favorites.module').then(m => m.FavoritesModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'previous-orders',
                loadChildren: () => import('../modules/account/previousOrders.module').then(m => m.PreviousOrdersModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'organization-hierarchy',
                loadChildren: () => import('../modules/account/organization-hierarchy.module').then(m => m.OrganizationHierarchyModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'reflection/:tableName',
                loadChildren: () => import('../modules/account/reflections.module').then(m => m.ReflectionsModule),
                resolve: { seo: SEOResolver }
            },
            {
                path: 'approve-orders',
                loadChildren: () => import('../modules/account/approve-orders.module').then(m => m.ApproveOrdersModule),
                resolve: { seo: SEOResolver }
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
