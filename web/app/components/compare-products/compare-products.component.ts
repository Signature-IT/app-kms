import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { ShareDataService as SharedDataServiceGeneric, RestUrlsConfig } from '@signature-it/ngx-generic';
import { CompareProductsComponent_Catalogue, GroupApiService, SharedDataService, SolrService } from '@signature-it/ngx-catalogue';

@Component({
    selector: 'compare-products',
    templateUrl: '../../../../projects/signature-it/ngx-catalogue/src/lib/components/compare-products/compare-products.component.html',
    styleUrls: ['../../../../projects/signature-it/ngx-catalogue/src/lib/components/compare-products/compare-products.component.scss']

})

export class CompareProductsComponent extends CompareProductsComponent_Catalogue implements OnInit {

    constructor(protected solrService: SolrService,
                protected groupApiService: GroupApiService,
                public route: ActivatedRoute,
                public restUrlsConfig: RestUrlsConfig,
                protected location: Location,
                protected shareDataGeneric: SharedDataServiceGeneric,
                public sharedData: SharedDataService) {
        super(solrService, groupApiService, route, restUrlsConfig, location, shareDataGeneric, sharedData);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
