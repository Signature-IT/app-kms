import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { ParallaxDirectiveModuleGeneric,
         NoImageDirectiveModuleGeneric,
         ContentloaderModule,
         HomepageBannersModuleGeneric,
         HomepageGroupLinksModuleGeneric } from '@signature-it/ngx-generic';

import { ProductsCarouselModule_Generic } from '@signature-it/ngx-catalogue';

import { HomepageComponent } from '../components/main-homepage/homepage/homepage.component';

@NgModule({
    declarations: [
        HomepageComponent,
    ],
    imports: [
        CommonModule,
        HomepageGroupLinksModuleGeneric,
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
