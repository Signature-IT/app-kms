import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CmsService,
    LanguageService,
    PageNotificationService,
    ShareDataService,
    GenericConfig,
    HomepageComponent as HomepageComponentGeneric
} from '@signature-it/ngx-generic';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent extends HomepageComponentGeneric implements OnInit {

    carusel_HP_config = GenericConfig.carusel_HP || null;

    constructor(protected notifySvc: PageNotificationService,
              protected langSvc: LanguageService,
                protected cmsSvc: CmsService,
              public sharedSvc: ShareDataService) {
        super(notifySvc, langSvc, cmsSvc, sharedSvc);
    }

    getRelatedByAlias(alias) {
        if (this.carusel_HP_config) {
            return this.carusel_HP_config.find(obj => obj.alias === alias);
        }
        return null;
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
