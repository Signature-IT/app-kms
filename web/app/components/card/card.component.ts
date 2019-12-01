import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RestUrlsConfig } from '@signature-it/ngx-generic';
import {
    CardComponent as CardGenericComponent,
    NavigationService,
    SharedDataService,
    SolrService,
    UtilityService
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
        public navigationService: NavigationService,
        public router: Router,
        public route: ActivatedRoute,
        public utilitySvc: UtilityService,
        public restUrlsConfig: RestUrlsConfig) {
        super(solrService, sharedData, navigationService, router, route, utilitySvc, restUrlsConfig);
    }

    ngOnInit() {
       super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

}
