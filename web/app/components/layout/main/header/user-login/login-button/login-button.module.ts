import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { UserLoginButtonComponent } from "./login-button";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    declarations: [UserLoginButtonComponent],
    exports: [UserLoginButtonComponent]
})
export class UserLoginButtonModule {}
