import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';
import {CatalogueMainLayoutComponent_Catalogue, GroupResolver} from '@signature-it/ngx-catalogue';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CatalogueMainLayoutComponent_Catalogue,
                children: [
                    {
                        path: 'group',
                        redirectTo: 'group/1',
                        pathMatch: 'full'
                    },
                    {
                        path: 'group/:groupId',
                        loadChildren: () => import('../modules/catalogue/card.module').then(m => m.CardModule_Catalogue),
                        resolve: { groupId: GroupResolver }
                    },
                    {
                        path: 'group/:groupId/:leafGroup',
                        loadChildren: () => import('../modules/catalogue/leaf-group.module').then(m => m.LeafGroupModule_Catalogue),
                        resolve: { groupId: GroupResolver }
                    },
                    {
                        path: 'group/:groupId/:leafGroup/:familyName',
                        loadChildren: () => import('../modules/catalogue/family.module').then(m => m.FamilyModule_Catalogue),
                        resolve: { groupId: GroupResolver }
                    }
                ]
            },
            {
                path: 'compare-products',
                loadChildren: () => import('../modules/catalogue/compare-products.module').then(m => m.CompareProductsModule_Catalogue)
            }
        ])
    ],
    providers: [
        GroupResolver
    ],
    exports: [RouterModule]
})
export class CatalogueRoutingModule {}
