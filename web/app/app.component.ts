import {Component, ViewContainerRef, OnInit, AfterViewInit} from '@angular/core';
import {
    AppComponent as AppComponent_Generic, AuthService, GoogleAnalyticsService, LanguageService
} from '@signature-it/ngx-generic';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent extends AppComponent_Generic {
    constructor(protected router: Router,
                protected auth: AuthService,
                protected analyticsSvc: GoogleAnalyticsService,
                protected langSvc: LanguageService,
                viewRef: ViewContainerRef) {
        super(router, auth, analyticsSvc, langSvc, viewRef);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }
}
