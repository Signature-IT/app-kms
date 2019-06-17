import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { TestSearchDirectiveModule } from "@signature-it/ngx-generic";
import { SearchModule_Catalogue } from "@signature-it/ngx-catalogue";
import { MainHeaderSearchFormComponent } from './search-form';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SearchModule_Catalogue,
        TestSearchDirectiveModule,
        TranslateModule
    ],
    declarations: [MainHeaderSearchFormComponent],
    exports: [MainHeaderSearchFormComponent]
})
/**
 * @extends MainHeaderSearchFormModuleGeneric
 */
export class MainHeaderSearchFormModule {}
