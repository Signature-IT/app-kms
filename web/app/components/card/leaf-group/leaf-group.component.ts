import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RestUrlsConfig } from '@signature-it/ngx-generic';
import { GroupApiService, LeafGroupComponent as LeafGroupGenericComponent, SharedDataService, SolrService} from '@signature-it/ngx-catalogue';

@Component({
    selector: 'leaf-group',
    templateUrl: '../../../../../projects/signature-it/ngx-catalogue/src/lib/components/card/leaf-group/leaf-group.component.html',
    styleUrls: ['../../../../../projects/signature-it/ngx-catalogue/src/lib/components/card/leaf-group/leaf-group.component.scss']
})
export class LeafGroupComponent extends LeafGroupGenericComponent implements OnInit, OnDestroy {

    constructor(protected router: Router,
                protected solrService: SolrService,
                protected sharedData: SharedDataService,
                public restUrlsConfig: RestUrlsConfig,
                public route: ActivatedRoute,
                public groupSvc: GroupApiService) {
        super(router, solrService, sharedData, restUrlsConfig, route, groupSvc);
    }

    ngOnInit() {
       super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
