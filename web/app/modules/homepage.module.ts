import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { ParallaxDirectiveModuleGeneric,
         NoImageDirectiveModuleGeneric,
         ContentloaderModule,
         HomepageBannersModuleGeneric } from '@signature-it/ngx-generic';

import { ProductsCarouselModule_Generic } from '@signature-it/ngx-catalogue';

import { HomepageComponent } from '../components/main-homepage/homepage/homepage.component';
import { HomepageGroupLinksModule } from '../components/main-homepage/homepage-group-links/homepage-group-links.module'
@NgModule({
    declarations: [
        HomepageComponent,
    ],
    imports: [
        CommonModule,
        HomepageGroupLinksModule,
        TranslateModule,
        HomepageBannersModuleGeneric,
        ContentloaderModule,
        NoImageDirectiveModuleGeneric,
        HomepageBannersModuleGeneric,
        ParallaxDirectiveModuleGeneric,
        ProductsCarouselModule_Generic,
        RouterModule.forChild([{
            path: '',
            component: HomepageComponent
        }]),
    ]
})
export class HomepageModule {}
