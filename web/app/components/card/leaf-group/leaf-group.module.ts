import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import { PaginationModule } from 'ngx-bootstrap';
import {LeafGroupComponent} from './leaf-group.component';
import {AddToCartModule} from '@signature-it/ngx-catalogue';
import {ProductsCards} from '../products-cards/products-cards.module';

@NgModule({
    declarations: [
        LeafGroupComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        AddToCartModule,
        ProductsCards,
        PaginationModule.forRoot(),
        NgbModule,
        RouterModule.forChild([{
            path: '',
            component: LeafGroupComponent
        }])
    ],
    exports: [LeafGroupComponent]
})
export class LeafGroupModule {}
