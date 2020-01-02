import {Component, ViewContainerRef, OnInit, AfterViewInit, Inject} from '@angular/core';
import {
    AppComponent as AppComponent_Generic, AuthService, GoogleAnalyticsService, LanguageService
} from '@signature-it/ngx-generic';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {CartStateActionsGeneric} from '@signature-it/ngx-catalogue';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent extends AppComponent_Generic {
    constructor(protected router: Router,
                protected auth: AuthService,
                protected analyticsSvc: GoogleAnalyticsService,
                protected langSvc: LanguageService,
                protected store$: Store<any>,
                protected cartActs: CartStateActionsGeneric,
                viewRef: ViewContainerRef,
                @Inject(DOCUMENT) doc) {
        super(router, auth, analyticsSvc, langSvc, viewRef, doc);
    }

    ngOnInit(): void {
        super.ngOnInit();
        // Must be here and not in cms-page because we use ngx-catalogue
        const getQuantityAct = this.cartActs.getItemsQuantity();
        window.addEventListener('message', (event) => {
            if (event.data) {
                try {
                    const data = JSON.parse(event.data);
                    if (data.qtyRefresh) {
                        this.store$.dispatch(getQuantityAct);
                    }
                } catch (e) {}
            }
        });
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }
}
