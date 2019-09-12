import { Component, ViewEncapsulation } from '@angular/core';
import { CmsService,
    LanguageService,
    PageNotificationService,
    ShareDataService,
    GenericConfig,
    HomepageComponent as HomepageComponentGeneric
} from "@signature-it/ngx-generic";

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent extends HomepageComponentGeneric {

    // GenericConfig.carusel_HP

    constructor(protected notifySvc: PageNotificationService,
              protected langSvc: LanguageService,
                protected cmsSvc: CmsService,
              public sharedSvc: ShareDataService) {
        super(notifySvc, langSvc, cmsSvc, sharedSvc);
    }

    getRelatedByAlias(alias) {
        return GenericConfig.carusel_HP.find(obj => obj.alias === alias);
    }

}
