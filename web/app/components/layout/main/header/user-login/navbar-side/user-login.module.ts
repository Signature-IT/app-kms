import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserLoginNavbarComponent } from "./user-login.component";
import { MainHeaderUserDetailsNavbarModuleGeneric } from "@signature-it/ngx-generic";
import { UserLoginButtonModule } from "../login-button/login-button.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MainHeaderUserDetailsNavbarModuleGeneric,
        UserLoginButtonModule
    ],
    declarations: [UserLoginNavbarComponent],
    exports: [UserLoginNavbarComponent]
})
/**
 * @extends UserLoginModule
 */
export class UserLoginNavbarComponentModule {}

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MainHeaderUserDetailsNavbarModuleGeneric,
        UserLoginNavbarComponentModule,
        UserLoginButtonModule
    ]
})
export class UserLoginNavbarModule {}
