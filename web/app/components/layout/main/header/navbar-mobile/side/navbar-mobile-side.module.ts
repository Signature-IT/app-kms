import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { LangsSidebarModuleGeneric, CmsModule} from '@signature-it/ngx-generic';
import {TreeViewModule_Catalogue} from "@signature-it/ngx-catalogue";
import { MainHeaderNavbarMobileSideComponent } from './navbar-mobile-side';
import { UserLoginModule } from '../../user-login/user-login.module';
import { UserLoginNavbarModule } from '../../user-login/navbar-side/user-login.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MatSidenavModule,
        UserLoginModule,
        UserLoginNavbarModule,
        LangsSidebarModuleGeneric,
        TreeViewModule_Catalogue,
        CmsModule
    ],
    declarations: [MainHeaderNavbarMobileSideComponent],
    exports: [MainHeaderNavbarMobileSideComponent]
})
/**
 * @extends MainHeaderNavbarMobileSideModuleGeneric
 */
export class MainHeaderNavbarMobileSideModule {}
