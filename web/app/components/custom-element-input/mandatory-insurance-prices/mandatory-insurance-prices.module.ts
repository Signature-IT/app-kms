import {Injector, NgModule} from "@angular/core";
import { MatRadioModule } from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {createCustomElement} from "@angular/elements";
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { SafePipeModule ,ReplaceTokensPipeModule } from '@signature-it/ngx-generic';
import {MandatoryInsurancePricesComponent} from "./mandatory-insurance-prices.component";

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
		MatNativeDateModule,
		SafePipeModule,
		ReplaceTokensPipeModule
	],
	declarations: [MandatoryInsurancePricesComponent],
	exports: [MandatoryInsurancePricesComponent],
	entryComponents: [MandatoryInsurancePricesComponent]
})
export class MandatoryInsurancePricesComponentModule {
	constructor(private injector: Injector) {
		const PriceSelect = createCustomElement(MandatoryInsurancePricesComponent, {injector});
		!customElements.get('ngx-cng-mandatory-insurance-prices') && customElements.define('ngx-cng-mandatory-insurance-prices', PriceSelect);
	}
}