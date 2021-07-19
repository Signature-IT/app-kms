import {Injector, NgModule} from "@angular/core";
import { DriverPolicyholderMotorcyclesComponent } from "./driver-policyholder-motorcycles.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {createCustomElement} from "@angular/elements";
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatOptionModule,
		ReactiveFormsModule,
		MatButtonToggleModule,
		TranslateModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
	declarations: [DriverPolicyholderMotorcyclesComponent],
	exports: [DriverPolicyholderMotorcyclesComponent],
	entryComponents: [DriverPolicyholderMotorcyclesComponent]
})
export class DriverPolicyholderMotorcyclesComponentModule {
	constructor(private injector: Injector) {
		const FromToDate = createCustomElement(DriverPolicyholderMotorcyclesComponent, {injector});
		!customElements.get('ngx-cng-driver-policyholder-motorcycles') && customElements.define('ngx-cng-driver-policyholder-motorcycles', FromToDate);
	}
}

