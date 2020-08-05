import { Component, OnInit } from '@angular/core';
import { HomepageGroupLinksComponent, PageNotificationService, HomepageService, RestUrlsConfig, LanguageService } from '@signature-it/ngx-generic';

@Component({
  selector: 'homepage-group-links',
  templateUrl: './homepage-group-links.component.html',
  styleUrls: [
      './homepage-group-links.component.scss'
  ]
})
export class HomepageGroupLinksComponentRailways extends HomepageGroupLinksComponent implements OnInit {

  constructor(protected notifySvc: PageNotificationService,
              protected HomepageSvc: HomepageService,
              protected restUrlsConf: RestUrlsConfig,
              protected langSvc: LanguageService) {
    super(notifySvc, HomepageSvc, restUrlsConf, langSvc);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
