import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MainHeaderNavbarMobileComponentGeneric } from '@signature-it/ngx-generic';
import { MainHeaderNavbarMobileTopComponent } from './top/navbar-mobile-top';

@Component({
    selector: 'main-header-navbar-mobile',
    templateUrl: './navbar-mobile.component.html'
})
export class MainHeaderNavbarMobileComponent extends  MainHeaderNavbarMobileComponentGeneric {
    @ViewChild(MainHeaderNavbarMobileTopComponent)  nbTop: MainHeaderNavbarMobileTopComponent;
}