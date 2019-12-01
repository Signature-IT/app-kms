import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {OrderModule} from 'ngx-order-pipe';
import {NoImageDirectiveModuleGeneric} from '@signature-it/ngx-generic';
import {CardComponent} from './card.component';
import {ProductsCards} from './products-cards/products-cards.module';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        OrderModule,
        ProductsCards,
        NoImageDirectiveModuleGeneric,
        RouterModule.forChild([{
            path: '',
            component: CardComponent
        }])
    ]
})
export class CardModule {}
