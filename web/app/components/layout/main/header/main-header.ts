import {Component, ElementRef, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import {MainHeaderComponentGeneric, ShareDataService, CmsComponent} from "@signature-it/ngx-generic";

declare let $: any;

@Component({
    selector: 'main-header',
    templateUrl: './main-header.html',
    styleUrls: ['./main-header.scss']
})
export class MainHeaderComponent extends MainHeaderComponentGeneric implements AfterViewInit, OnInit {

    @ViewChild('cmsComp', {static: false}) cmsComp: CmsComponent;
    @ViewChild('containerRef', {static: false}) containerRef: ElementRef;

    constructor(protected elRef: ElementRef,
                public shareSvc: ShareDataService) {
        super(elRef, shareSvc);
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}
