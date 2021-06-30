import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {ProductCardComponent} from './product-card.component';
import {AddToCartModule, ProductSolrImageDirectiveModule, PriceModule_Catalogue} from '@signature-it/ngx-catalogue';

@NgModule({
    declarations: [
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        AddToCartModule,
        NgbModule,
        ProductSolrImageDirectiveModule,
        MatSlideToggleModule,
        PriceModule_Catalogue
    ],
    exports: [ProductCardComponent]
})
export class ProductCardModule {}
