import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CmsService,
    LanguageService,
    PageNotificationService,
    ShareDataService,
    GenericConfig,
    HomepageComponent as HomepageComponentGeneric,
    SeoService_Generic
} from '@signature-it/ngx-generic';
declare let _: any;

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent extends HomepageComponentGeneric implements OnInit {

    carouselHPconfig = GenericConfig.carouselHP || null;

    constructor(protected notifySvc: PageNotificationService,
                protected langSvc: LanguageService,
                protected cmsSvc: CmsService,
                public sharedSvc: ShareDataService,
                public seoSvc: SeoService_Generic) {
        super(notifySvc, langSvc, cmsSvc, sharedSvc, seoSvc);
        this.carouselHPconfig =  _.reduce(this.carouselHPconfig, function (o, item) { o[item.alias] = item; return o }, {});
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
