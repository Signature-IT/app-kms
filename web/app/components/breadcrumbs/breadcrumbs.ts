import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, UrlSegment } from "@angular/router";
import { IBreadcrumbs, IBreadcrumbsData } from '@signature-it/ngx-generic';
import { BreadcrumbsDTO } from '@signature-it/ngx-generic';
import { BreadcrumbsService } from '@signature-it/ngx-generic';
import { ShareDataService } from '@signature-it/ngx-generic';
import {Util} from "leaflet";
import { BreadcrumbsComponent as BreadcrumbsComponentGeneric } from '@signature-it/ngx-generic';
import indexOf = Util.indexOf;

declare let _: any;

@Component({
	selector: 'breadcrumbs',
	templateUrl: '../../../../projects/signature-it/ngx-generic/src/lib/components/breadcrumbs/breadcrumbs.html',
    styleUrls: [
        '../../../../projects/signature-it/ngx-generic/src/lib/components/breadcrumbs/breadcrumbs.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent extends BreadcrumbsComponentGeneric{

	constructor(router: Router,
                protected breadcrumbsSvc: BreadcrumbsService,
                protected sharedDataSvc: ShareDataService) {

		super(router, breadcrumbsSvc, sharedDataSvc);
	}

	protected _setBreadcrumbs(...params) {
		if(!params || !params.length || !params[0] || params[0]['path'] === '/') {
            return;
        } else {
            this.routerList = this.breadcrumbsSvc.init();
		    const param0 = params[0];
		    let list = param0 instanceof UrlSegment ? this.breadcrumbsSvc.parse(param0) : param0;
            if(_.isArray(list)) {
                _.each(list, (dto: IBreadcrumbs) => {
                    if (dto instanceof BreadcrumbsDTO) {
                        const prev = this.routerList.map((b) => b.link).join('/');
                        dto.link = `${prev}/${dto.link}`.replace(/^\/\//, '/');
                        this.routerList.push(dto);
                    }
                });
            }
            let isCmsPage = this.routerList[this.routerList.length - 1].link.indexOf('/content/page/') > -1;
            console.log('is cms', isCmsPage);
            this.show = this.show ? !isCmsPage : this.show;
        }
	}

}
