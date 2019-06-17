import { Component } from '@angular/core';
import {MainHeaderComponentGeneric} from "@signature-it/ngx-generic";

declare let $: any;

@Component({
    selector: 'main-header',
    templateUrl: './main-header.html',
    styleUrls: ['./main-header.scss']
})
export class MainHeaderComponent extends MainHeaderComponentGeneric {}