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
import { SafePipeModule } from '@signature-it/ngx-generic';
import {PropertyInsurancePricesComponent} from "./property-insurance-prices.component";

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
		SafePipeModule
	],
	declarations: [PropertyInsurancePricesComponent],
	exports: [PropertyInsurancePricesComponent],
	entryComponents: [PropertyInsurancePricesComponent]
})
export class PropertyInsurancePricesComponentModule {
	constructor(private injector: Injector) {
		const PriceSelect = createCustomElement(PropertyInsurancePricesComponent, {injector});
		!customElements.get('ngx-cng-property-insurance-prices') && customElements.define('ngx-cng-property-insurance-prices', PriceSelect);
	}
}