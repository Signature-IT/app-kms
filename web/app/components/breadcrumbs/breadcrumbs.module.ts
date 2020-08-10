import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material";
import { BreadcrumbsService } from '@signature-it/ngx-generic';
import { BreadcrumbsComponent } from "./breadcrumbs";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MatIconModule
    ],
    declarations: [BreadcrumbsComponent],
    exports: [BreadcrumbsComponent],
    providers: [BreadcrumbsService]
})
export class BreadcrumbsModule {}
