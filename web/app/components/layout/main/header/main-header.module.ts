import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    CmsModule,
    MainTopNavigationModuleGeneric,
    DropdownLangsModuleGeneric,
    MainHeaderSearchFormModuleGeneric,
    PhoneOrderModule,
    GroupsMenuModuleGeneric
} from '@signature-it/ngx-generic';

import { SearchModule_Catalogue, MainHeaderCartModuleGeneric } from '@signature-it/ngx-catalogue';
import { MainHeaderNavbarMobileModule } from './navbar-mobile/navbar-mobile.module';
import { MainHeaderNavbarMobileTopModule } from './navbar-mobile/top/navbar-mobile-top.module';
import { MainHeaderComponent } from './main-header';
import { UserLoginModule } from './user-login/user-login.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CmsModule,
        MainTopNavigationModuleGeneric,
        DropdownLangsModuleGeneric,
        UserLoginModule,
        MainHeaderSearchFormModuleGeneric,
        MainHeaderCartModuleGeneric,
        MainHeaderNavbarMobileTopModule,
        SearchModule_Catalogue,
        MainHeaderNavbarMobileModule,
        PhoneOrderModule,
        GroupsMenuModuleGeneric
    ],
    declarations: [MainHeaderComponent],
    entryComponents: [MainHeaderComponent],
    exports: [MainHeaderComponent]
})
/**
 * @extends MainHeaderModuleGeneric
 */
export class MainHeaderModule {}
