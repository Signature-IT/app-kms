import { Component, ViewEncapsulation } from '@angular/core';
import { MainHeaderNavbarMobileTopComponentGeneric } from '@signature-it/ngx-generic';
import { SharedDataService } from '@signature-it/ngx-catalogue';

declare let _: any;

@Component({
    selector: 'main-header-navbar-mobile-top',
    templateUrl: './navbar-mobile-top.html',
    styleUrls: ['./navbar-mobile-top.scss'],
    encapsulation: ViewEncapsulation.None,
    inputs: [
        'data',
        'is-sidebar-open'
    ],
    outputs: ['toggle']
})
export class MainHeaderNavbarMobileTopComponent extends MainHeaderNavbarMobileTopComponentGeneric {
    constructor(protected shareDataSvc: SharedDataService) {
        super();
    }

    init(event) {
        event.stopPropagation();
        this.shareDataSvc.clickedFilter.next(null);
        this.shareDataSvc.isFilterOpen = false;
    }
}
