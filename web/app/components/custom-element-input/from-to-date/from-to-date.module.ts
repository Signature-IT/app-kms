import {Injector, NgModule} from "@angular/core";
import { FromToDateComponent } from "./from-to-date.component";
import { MatRadioModule } from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {createCustomElement} from "@angular/elements";
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule,
		MatFormFieldModule,
		MatInputModule,
		MatOptionModule,
		ReactiveFormsModule,
		MatRadioModule,
		TranslateModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
	declarations: [FromToDateComponent],
	exports: [FromToDateComponent],
	entryComponents: [FromToDateComponent]
})
export class FromToDateComponentModule {
	constructor(private injector: Injector) {
		const FromToDate = createCustomElement(FromToDateComponent, {injector});
		!customElements.get('ngx-cng-from-to-date') && customElements.define('ngx-cng-from-to-date', FromToDate);
	}
}