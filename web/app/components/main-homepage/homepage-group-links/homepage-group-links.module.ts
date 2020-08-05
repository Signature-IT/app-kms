import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { NguCarouselModule } from '@ngu/carousel';
import { HomepageGroupLinksComponentRailways } from "./homepage-group-links.component";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        NguCarouselModule
    ],
    declarations: [HomepageGroupLinksComponentRailways],
    exports: [HomepageGroupLinksComponentRailways]
})
export class HomepageGroupLinksModule {}
