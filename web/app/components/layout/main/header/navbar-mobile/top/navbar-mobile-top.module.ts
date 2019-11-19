import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { UserLoginModuleGeneric, Collapsible2DirectiveModule} from '@signature-it/ngx-generic';
import { MainHeaderCartModuleGeneric } from '@signature-it/ngx-catalogue';
import { MainHeaderSearchFormModule } from '../../search-form/search-form.module';
import { MainHeaderNavbarMobileTopComponent } from './navbar-mobile-top';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MainHeaderSearchFormModule,
        MainHeaderCartModuleGeneric,
        UserLoginModuleGeneric,
        Collapsible2DirectiveModule
    ],
    declarations: [MainHeaderNavbarMobileTopComponent],
    exports: [MainHeaderNavbarMobileTopComponent]
})
/**
 * @extends MainHeaderNavbarMobileTopModuleGeneric
 */
export class MainHeaderNavbarMobileTopModule {}
