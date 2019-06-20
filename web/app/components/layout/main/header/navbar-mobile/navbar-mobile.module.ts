import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { MainHeaderNavbarMobileComponent } from "./navbar-mobile.component";
import { MainHeaderNavbarMobileTopModule } from "./top/navbar-mobile-top.module";
import { MainHeaderNavbarMobileSideModuleGeneric } from "@signature-it/ngx-generic";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MainHeaderNavbarMobileTopModule,
        MainHeaderNavbarMobileSideModuleGeneric
    ],
    declarations: [MainHeaderNavbarMobileComponent],
    exports: [MainHeaderNavbarMobileComponent],
    providers: [
        OrderPipe
    ]
})
/**
 * @extends MainHeaderNavbarMobileModuleGeneric
 */
export class MainHeaderNavbarMobileModule {}
