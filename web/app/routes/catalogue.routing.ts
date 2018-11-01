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
                        loadChildren: '../modules/catalogue/card.module#CardModule_Catalogue',
                        resolve: { groupId: GroupResolver }
                    },
                    {
                        path: 'group/:groupId/:leafGroup',
                        loadChildren: '../modules/catalogue/leaf-group.module#LeafGroupModule_Catalogue',
                        resolve: { groupId: GroupResolver }
                    },
                    {
                        path: 'group/:groupId/:leafGroup/:familyName',
                        loadChildren: '../modules/catalogue/family.module#FamilyModule_Catalogue',
                        resolve: { groupId: GroupResolver }
                    }
                ]
            },
            {
                path: 'compare-products',
                loadChildren: '../modules/catalogue/compare-products.module#CompareProductsModule_Catalogue'
            }
        ])
    ],
    providers: [
        GroupResolver
    ],
    exports: [RouterModule]
})
export class CatalogueRoutingModule {}