import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    CmsModule,
    UserLoginModuleGeneric,
    MainHeaderSearchFormModuleGeneric,
    MainHeaderNavbarMobileModuleGeneric,
    MainTopNavigationModuleGeneric,
    DropdownLangsModuleGeneric
     } from "@signature-it/ngx-generic";
import { SearchModule_Catalogue, MainHeaderCartModuleGeneric } from "@signature-it/ngx-catalogue";
import {MainHeaderComponent} from './main-header';

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
        MainHeaderNavbarMobileModuleGeneric,
        SearchModule_Catalogue,
    ],
    declarations: [MainHeaderComponent],
    entryComponents: [MainHeaderComponent],
    exports: [MainHeaderComponent]
})
/**
 * @extends MainHeaderModuleGeneric
 */
export class MainHeaderModule {}
