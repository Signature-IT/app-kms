import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownUserMenuModuleGeneric} from '@signature-it/ngx-generic';
import { MainHeaderUserDetailsModule} from './user-details/user-details.module';
import { UserLoginButtonModule} from './login-button/login-button.module';
import { UserLoginComponent } from './user-login.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DropdownUserMenuModuleGeneric,
        MainHeaderUserDetailsModule,
        UserLoginButtonModule,
        MatMenuModule
    ],
    declarations: [UserLoginComponent],
    exports: [UserLoginComponent]
})
export class UserLoginModule {}
