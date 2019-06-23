import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { MainHeaderNavbarMobileComponentGeneric, AuthService, LanguageService, MenuNavigationService } from '@signature-it/ngx-generic';
import { MainHeaderNavbarMobileTopComponent } from './top/navbar-mobile-top';
import {MainHeaderNavbarMobileSideComponent} from './side/navbar-mobile-side';

@Component({
    selector: 'main-header-navbar-mobile',
    templateUrl: './navbar-mobile.component.html'
})
export class MainHeaderNavbarMobileComponent extends  MainHeaderNavbarMobileComponentGeneric  implements OnInit {
    @ViewChild(MainHeaderNavbarMobileTopComponent, {static: true})  nbTop: MainHeaderNavbarMobileTopComponent;
    @ViewChild(MainHeaderNavbarMobileSideComponent, {static: true}) nbSide: MainHeaderNavbarMobileSideComponent;

    constructor(protected navSvc: MenuNavigationService,
                protected langSvc: LanguageService,
                protected authSvc: AuthService) {
        super(navSvc, langSvc, authSvc);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

}
