import { Component } from '@angular/core';
import { ShareDataService, UserLoginButtonComponentGeneric } from '@signature-it/ngx-generic';

@Component({
    selector: 'user-login-button',
    templateUrl: './login-button.html',
    styleUrls: [
        '../../../../../../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/header/user-login/user-details/user-details.scss',
        './login-button.scss'
    ]
})
export class UserLoginButtonComponent extends UserLoginButtonComponentGeneric{
    constructor(
        public sharedSvc: ShareDataService
    ) {
        super(sharedSvc);
    }
}
