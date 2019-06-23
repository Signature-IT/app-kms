import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MainHeaderNavbarMobileComponentGeneric } from '@signature-it/ngx-generic';
import { MainHeaderNavbarMobileTopComponent } from './top/navbar-mobile-top';
import {MainHeaderNavbarMobileSideComponent} from './side/navbar-mobile-side';

@Component({
    selector: 'main-header-navbar-mobile',
    templateUrl: './navbar-mobile.component.html'
})
export class MainHeaderNavbarMobileComponent extends  MainHeaderNavbarMobileComponentGeneric {
    @ViewChild(MainHeaderNavbarMobileTopComponent, {static: true})  nbTop: MainHeaderNavbarMobileTopComponent;
    @ViewChild(MainHeaderNavbarMobileSideComponent, {static: true}) nbSide: MainHeaderNavbarMobileSideComponent;
}
