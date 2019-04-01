import { Component } from '@angular/core';
import {MainHeaderComponentGeneric} from "../../../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/header/main-header";

declare let $: any;

@Component({
    selector: 'main-header',
    templateUrl: './main-header.html',
    styleUrls: ['./../../../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/main.scss']
})
export class MainHeaderComponent extends MainHeaderComponentGeneric {

}
