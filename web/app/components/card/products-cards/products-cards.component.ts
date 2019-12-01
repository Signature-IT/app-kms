import {Component, OnInit, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { RestUrlsConfig } from '@signature-it/ngx-generic';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {
    ProductsCardsComponent as  ProductsCardsGenericComponent,
    FamilyCardComponent,
    SharedDataService,
    SolrService,
    CatalogueStateActions
} from '@signature-it/ngx-catalogue';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
    selector: 'products-cards',
    templateUrl: '../../../../../projects/signature-it/ngx-catalogue/src/lib/components/card/products-cards/products-cards.component.html',
    styleUrls: ['../../../../../projects/signature-it/ngx-catalogue/src/lib/components/card/products-cards/products-cards.component.scss'],
    inputs: ['items', 'totalItems', 'page', 'itemsPerPage']
})
export class ProductsCardsComponent extends ProductsCardsGenericComponent implements OnChanges, OnInit {

    @ViewChild('productCard', {static: false}) protected productCard: ProductCardComponent;
    @ViewChild('familyCard', {static: false}) protected familyCard: FamilyCardComponent;

    constructor(protected router: Router,
                protected solrService: SolrService,
                public sharedSvc: SharedDataService,
                public restUrlsConfig: RestUrlsConfig,
                public route: ActivatedRoute,
                protected store$: Store<any>,
                protected catAtcs: CatalogueStateActions) {
        super(router, solrService, sharedSvc, restUrlsConfig, route, store$, catAtcs);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnChanges(changes: SimpleChanges): void {
      super.ngOnChanges(changes);
    }
}
