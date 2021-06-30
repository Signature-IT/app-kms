import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ProductsCardsComponent} from './products-cards.component';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CmsModule} from '@signature-it/ngx-generic';
import {FamilyCardModule_Catalogue, SortModule_Catalogue} from '@signature-it/ngx-catalogue';
import {ProductCardModule} from './product-card/product-card.module';

@NgModule({
    declarations: [
        ProductsCardsComponent
    ],
    imports: [
        CommonModule,
        ProductCardModule,
        FamilyCardModule_Catalogue,
        TranslateModule,
        FormsModule,
        RouterModule,
        PaginationModule,
        CmsModule,
        NgbModule,
        SortModule_Catalogue
    ],
    exports: [ProductsCardsComponent]
})
export class ProductsCards {}
