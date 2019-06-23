import { Component, ViewEncapsulation } from '@angular/core';
import { MainHeaderNavbarMobileSideComponentGeneric } from '@signature-it/ngx-generic';


@Component({
    selector: 'main-header-navbar-mobile-side',
    templateUrl: './navbar-mobile-side.html',
    styleUrls: ['./navbar-mobile-side.scss'],
    encapsulation: ViewEncapsulation.None,
    inputs: [
        'data',
        'is-sidebar-open'
    ]
})
export class MainHeaderNavbarMobileSideComponent extends MainHeaderNavbarMobileSideComponentGeneric {}
