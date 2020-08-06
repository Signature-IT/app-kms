import { Component, Input, OnChanges, ViewEncapsulation, SimpleChanges, OnInit } from '@angular/core';
import { SignedUserDTO, ShareDataService, MainHeaderUserDetailsComponentGeneric } from '@signature-it/ngx-generic';

@Component({
    selector: 'main-header-user-details',
    templateUrl: './user-details.html',
    styleUrls: [
        '../../../../../../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/header/user-login/user-details/user-details.scss',
        './user-details.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class MainHeaderUserDetailsComponent extends MainHeaderUserDetailsComponentGeneric implements OnChanges, OnInit {
    @Input() user: SignedUserDTO;
    userName: string;

    constructor(
        public shareDataService: ShareDataService
    ) {
        super(shareDataService);
    }

    ngOnChanges(changes: SimpleChanges): void {}
    ngOnInit(): void {}
}
