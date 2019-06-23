import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { LangsSidebarModuleGeneric,  UserLoginNavbarModuleGeneric, UserLoginModuleGeneric} from '@signature-it/ngx-generic';
import {TreeViewModule_Catalogue} from "@signature-it/ngx-catalogue";
import { MainHeaderNavbarMobileSideComponent } from './navbar-mobile-side';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MatSidenavModule,
        UserLoginModuleGeneric,
        UserLoginNavbarModuleGeneric,
        LangsSidebarModuleGeneric,
        TreeViewModule_Catalogue
    ],
    declarations: [MainHeaderNavbarMobileSideComponent],
    exports: [MainHeaderNavbarMobileSideComponent]
})
/**
 * @extends MainHeaderNavbarMobileSideModuleGeneric
 */
export class MainHeaderNavbarMobileSideModule {}
