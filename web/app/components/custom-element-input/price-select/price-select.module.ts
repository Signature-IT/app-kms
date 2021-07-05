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
import {PriceSelectComponent} from "./price-select.component";
import { SafePipeModule } from '@signature-it/ngx-generic';
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
	declarations: [PriceSelectComponent],
	exports: [PriceSelectComponent],
	entryComponents: [PriceSelectComponent]
})
export class PriceSelectComponentModule {}