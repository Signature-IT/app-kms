import { NgModule } from "@angular/core";
import { MainLayoutModuleGeneric } from "@signature-it/ngx-generic";
import { MainRoutingModule } from "../routes/main.routing";
import {PageTitleModuleGeneric} from '../../../projects/signature-it/ngx-generic/src/lib/components/page-title/page-title.module';
import {MainFooterModuleGeneric} from '../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/footer/main-footer.module';
import {MainFooterComponent} from '../../../projects/signature-it/ngx-generic/src/lib/components/layouts/main/footer/main-footer';
import {RouterModule} from '@angular/router';
import {BreadcrumbsModule} from '../../../projects/signature-it/ngx-generic/src/lib/components/breadcrumbs/breadcrumbs.module';
import {ContentloaderModule} from '../../../projects/signature-it/ngx-generic/src/lib/components/contentloader/contentloader.module';
import {LoginService} from '../../../projects/signature-it/ngx-generic/src/lib/services/login';
import {RequestOptionsProvider} from '../../../projects/signature-it/ngx-generic/src/lib/services/default-request-options';
import {CmsModule} from '../../../projects/signature-it/ngx-generic/src/lib/components/cms/cms.module';
import {MatSidenavModule} from '@angular/material';
import {MenuNavigationService} from '../../../projects/signature-it/ngx-generic/src/lib/services/menu-navigation';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MainLayoutComponent} from './main/main';
import {MainHeaderModule} from './main/header/main-header.module';

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
        RequestOptionsProvider,
        MenuNavigationService
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