import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    CmsModule,
    UserLoginModuleGeneric,
    MainTopNavigationModuleGeneric,
    DropdownLangsModuleGeneric,
    MainHeaderSearchFormModuleGeneric,
    PhoneOrderModule
} from '@signature-it/ngx-generic';

import { SearchModule_Catalogue, MainHeaderCartModuleGeneric } from '@signature-it/ngx-catalogue';
import { MainHeaderNavbarMobileModule } from './navbar-mobile/navbar-mobile.module';
import { MainHeaderNavbarMobileTopModule } from './navbar-mobile/top/navbar-mobile-top.module';
import { MainHeaderComponent } from './main-header';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CmsModule,
        MainTopNavigationModuleGeneric,
        DropdownLangsModuleGeneric,
        UserLoginModuleGeneric,
        MainHeaderSearchFormModuleGeneric,
        MainHeaderCartModuleGeneric,
        MainHeaderNavbarMobileTopModule,
        SearchModule_Catalogue,
        MainHeaderNavbarMobileModule,
        PhoneOrderModule
    ],
    declarations: [MainHeaderComponent],
    entryComponents: [MainHeaderComponent],
    exports: [MainHeaderComponent]
})
/**
 * @extends MainHeaderModuleGeneric
 */
export class MainHeaderModule {}
