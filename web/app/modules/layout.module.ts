import { NgModule } from "@angular/core";
import { MainLayoutModuleGeneric, PageTitleModuleGeneric, MainFooterModuleGeneric, MainFooterComponent } from "@signature-it/ngx-generic";
import { MainRoutingModule } from "../routes/main.routing";
import {RouterModule} from '@angular/router';
import {ContentloaderModule,
    RequestOptionsProvider,
    CmsModule} from '@signature-it/ngx-generic';
import {MatSidenavModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MainLayoutComponent} from '../components/layout/main/main';
import {MainHeaderModule} from '../components/layout/main/header/main-header.module';
import { BreadcrumbsModule } from '../components/breadcrumbs/breadcrumbs.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        CmsModule,
        ContentloaderModule,
        MatSidenavModule,
        BreadcrumbsModule,
        PageTitleModuleGeneric,
        MainHeaderModule,
        MainFooterModuleGeneric
    ],
    exports: [MainLayoutComponent],
    declarations: [MainLayoutComponent],
    // entryComponents: [MainFooterComponent],
    providers:[
        RequestOptionsProvider
    ]
})
/**
 * @extends MainLayoutModuleGeneric
 */
export class MainLayoutModule {}

@NgModule({
    imports: [
        MainLayoutModule,
        MainRoutingModule
    ]
})
/**
 * @extends MainLayoutModuleGeneric_Wrapper
 */
export class MainLayoutModule_Wrapper {}
