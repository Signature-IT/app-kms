import {Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SolrFilterFieldsComponent } from './solr-filter-fields.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {createCustomElement} from "@angular/elements";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [SolrFilterFieldsComponent],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatIconModule
    ],
    exports: [
		SolrFilterFieldsComponent
    ],
    entryComponents: [
		SolrFilterFieldsComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SolrFilterFieldsModule {
    constructor(private injector: Injector) {
        customElements.define(
            'ngx-cng-solr-filter-fields',
            createCustomElement(SolrFilterFieldsComponent, {injector})
        );
    }
}
