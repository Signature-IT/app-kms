import { Component, OnInit, Input } from '@angular/core';
import { UserLoginComponentGeneric, MobileLinksDTO, AuthService, ShareDataService, IUser} from '@signature-it/ngx-generic';

// @dynamic
@Component({
    selector: 'user-login',
    templateUrl: '../../../../../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/header/user-login/user-login.component.html',
    styleUrls: ['../../../../../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/header/user-login/user-login.component.scss']
})
export class UserLoginComponent extends UserLoginComponentGeneric implements OnInit {
    @Input()  account : MobileLinksDTO[];
    static userAuthenticated: boolean;
    isUserAuth: boolean;
    usersData: IUser;

    constructor(protected authService: AuthService,
                public shareDataService: ShareDataService) {
        super(authService, shareDataService)
    }

    ngOnInit() {
        super.ngOnInit();
    }


}
