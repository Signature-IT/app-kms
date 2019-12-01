import {Component, OnInit} from '@angular/core';
import {PageNotificationService, RestUrlsConfig} from '@signature-it/ngx-generic';
import { ProductCardComponent as ProductCardGenericComponent } from '@signature-it/ngx-catalogue';
import {Router} from '@angular/router';


@Component({
    selector: 'product-card',
    templateUrl: '../../../../../../projects/signature-it/ngx-catalogue/src/lib/components/card/products-cards/product-card/product-card.component.html',
    styleUrls: ['../../../../../../projects/signature-it/ngx-catalogue/src/lib/components/card/products-cards/product-card/product-card.component.scss'],
    inputs: ['item', 'page'],
    outputs: ['onRemoveProduct']
})
export class ProductCardComponent extends ProductCardGenericComponent implements OnInit {

    constructor(
        public restUrlsConfig: RestUrlsConfig,
        protected router: Router,
        public notifySvc: PageNotificationService) {
            super(restUrlsConfig, router, notifySvc);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
