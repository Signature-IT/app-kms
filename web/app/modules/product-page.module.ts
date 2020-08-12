import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { productPageComponent } from '../components/pages/product/product-page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContentloaderModule, NoImageDirectiveModuleGeneric} from '@signature-it/ngx-generic';
import {AddToCartModule,
    PriceModule_Catalogue,
    ProductImagesCarouselModule_Generic,
    ProductContextTabsModule_Generic,
    ProductContextSectionsGenericModule,
    ProductLinkActionsModule_Generic,
    ProductsCarouselModule_Generic,
    ProductContextSideBySideGenericModule
} from '@signature-it/ngx-catalogue'


@NgModule({
    declarations: [productPageComponent],
    imports: [
        RouterModule.forChild([{
            path: '',
            component: productPageComponent
        }]),
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        NoImageDirectiveModuleGeneric,
        ContentloaderModule,
        ProductImagesCarouselModule_Generic,
        ProductContextTabsModule_Generic,
        ProductContextSectionsGenericModule,
        ProductLinkActionsModule_Generic,
        ProductContextSideBySideGenericModule,
        ProductsCarouselModule_Generic,
        AddToCartModule,
        PriceModule_Catalogue
    ]
})
export class productPageModule{}
