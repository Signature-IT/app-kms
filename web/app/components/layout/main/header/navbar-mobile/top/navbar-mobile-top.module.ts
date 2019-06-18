import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { UserLoginModuleGeneric} from '@signature-it/ngx-generic';
// import { MainHeaderMediaCartModule } from '@signature-it/ngx-media/web/app/components/cart/cart.module';
// import { MainHeaderCartModuleGeneric } from "../../../../../../components/layouts/main/header/cart/cart.module";
import { MainHeaderSearchFormModule } from '../../search-form/search-form.module';
import { MainHeaderNavbarMobileTopComponent } from './navbar-mobile-top';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MainHeaderSearchFormModule,
        // MainHeaderCartModuleGeneric,
        // MainHeaderMediaCartModule,
        UserLoginModuleGeneric
    ],
    declarations: [MainHeaderNavbarMobileTopComponent],
    exports: [MainHeaderNavbarMobileTopComponent]
})
/**
 * @extends MainHeaderNavbarMobileTopModuleGeneric
 */
export class MainHeaderNavbarMobileTopModule {}
