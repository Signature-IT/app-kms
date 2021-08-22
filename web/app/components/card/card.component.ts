import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RestUrlsConfig, SeoService_Generic } from '@signature-it/ngx-generic';
import {
    CardComponent as CardGenericComponent,
    SharedDataService,
    SolrService,
    UtilityService,
    GroupApiService
} from '@signature-it/ngx-catalogue';

@Component({
    selector: 'catalogue-card',
    templateUrl: '../../../../projects/signature-it/ngx-catalogue/src/lib/components/card/card.component.html',
    styleUrls: ['../../../../projects/signature-it/ngx-catalogue/src/lib/components/card/card.component.scss']
})
export class CardComponent extends CardGenericComponent implements OnInit, OnDestroy {

    constructor(
        public solrService: SolrService,
        public sharedData: SharedDataService,
        public groupSvc: GroupApiService,
        public router: Router,
        public route: ActivatedRoute,
        public utilitySvc: UtilityService,
        public restUrlsConfig: RestUrlsConfig,
        public seoSvc: SeoService_Generic) {
        super(solrService, sharedData, groupSvc, router, route, utilitySvc, restUrlsConfig);
    }

    ngOnInit() {
       super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
