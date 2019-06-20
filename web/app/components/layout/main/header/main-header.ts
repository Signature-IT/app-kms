import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import {MainHeaderComponentGeneric, ShareDataService, CmsComponent} from "@signature-it/ngx-generic";

declare let $: any;

@Component({
    selector: 'main-header',
    templateUrl: './main-header.html',
    styleUrls: ['./main-header.scss']
})
export class MainHeaderComponent extends MainHeaderComponentGeneric implements AfterViewInit {

    @ViewChild('cmsComp', {static: false}) cmsComp: CmsComponent;
    @ViewChild('containerRef', {static: false}) containerRef: ElementRef;

    constructor(protected elRef: ElementRef,
                public shareSvc: ShareDataService) {
        super(elRef, shareSvc);
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }
}
