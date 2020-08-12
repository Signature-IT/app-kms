import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import {Observable, Observer, Subject} from 'rxjs';

import {
    BreadcrumbsService,
    LanguageService,
    SeoService_Generic,
    ShareDataService as SharedDataServiceGeneric,
    RestUrlsConfig,
    ILanguage,
    DateFormatPipe,
} from '@signature-it/ngx-generic';
import {
    CatalogueStateActions,
    SolrProductService,
    SharedDataService,
    ProductPageService_Generic,
    GroupApiService,
    productPageComponent_Generic,
    ProductFullSolrDTO
} from '@signature-it/ngx-catalogue';

@Component({
    selector: 'product-page',
    templateUrl: './product-page.html',
    styleUrls: ['../../../../../projects/signature-it/ngx-catalogue/src/lib/components/pages/product/product-page.scss']
})
export class productPageComponent extends productPageComponent_Generic implements OnInit, OnDestroy {
    item: ProductFullSolrDTO;
    ans$: Observable<any>;
    ans: any;
    processing = false;
    rc$: Observable<Array<number>>;
    private destroy$: Subject<void> = new Subject<void>();
    lang: ILanguage;
    items: ProductFullSolrDTO[];
    mediaAssets: Array<any> = [];
    images: any;
    subscriptions = {};
    titleText: string = 'Copy this Token to clipboard';
    iframeFeedbackParams = {};
    dateFormat = new DateFormatPipe();
    @ViewChild('dialogFeedbackTemplate', {static: false}) dialogFeedbackTemplate: TemplateRef<any>;
    @ViewChild('shareTmp', {static: false}) shareTmp: TemplateRef<any>;

    constructor(protected solrProductService: SolrProductService,
                protected activatedRoute: ActivatedRoute,
                protected title: Title,
                protected langSvc: LanguageService,
                protected seoSvc: SeoService_Generic,
                protected breadcrumbsService: BreadcrumbsService,
                protected store$: Store<any>,
                protected catAtcs: CatalogueStateActions,
                protected shareDataGeneric: SharedDataServiceGeneric,
                protected productPageService: ProductPageService_Generic,
                public sharedSvc: SharedDataService,
                protected restUrlsConf: RestUrlsConfig,
                protected router: Router,
                protected groupSvc: GroupApiService
    ) {
        super(solrProductService, activatedRoute, title, langSvc, seoSvc, breadcrumbsService, store$, catAtcs, shareDataGeneric, productPageService, sharedSvc, restUrlsConf, router, groupSvc);

    }

    ngOnInit(): void {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnInit();
    }

}
