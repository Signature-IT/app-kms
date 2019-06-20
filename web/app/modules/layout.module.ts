import { NgModule } from "@angular/core";
import { MainLayoutModuleGeneric } from "@signature-it/ngx-generic";
import { MainRoutingModule } from "../routes/main.routing";
import {PageTitleModuleGeneric} from '../../../projects/signature-it/ngx-generic/src/lib/components/page-title/page-title.module';
import {MainFooterModuleGeneric} from '../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/footer/main-footer.module';
import {MainFooterComponent} from '../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/footer/main-footer';
import {RouterModule} from '@angular/router';
import {BreadcrumbsModule,
    ContentloaderModule,
    RequestOptionsProvider,
    CmsModule} from '@signature-it/ngx-generic';
import {MatSidenavModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MainLayoutComponent} from '../components/layout/main/main';
import {MainHeaderModule} from '../components/layout/main/header/main-header.module';

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
    entryComponents: [MainFooterComponent],
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
