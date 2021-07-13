import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
	CustomElementInputComponent, FormService, CngDataDTO,
	FormField, SelectField, LanguageService, ILanguage, OptionDTO,
	FormSettingsDTO, ComponentDTO, IUser, AuthService, CngPriceService
} from '@signature-it/ngx-generic';
import {Observable} from "rxjs/index";
import {PriceSelectComponent} from "../price-select/price-select.component";


@Component({
	selector: 'mandatory-insurance-prices',
	templateUrl: '../price-select/price-select.component.html',
	styleUrls: ['../price-select/price-select.component.scss']
})
export class MandatoryInsurancePricesComponent extends PriceSelectComponent implements OnInit {
	@Input() componentGroupId;
	@Input() id = '';

	constructor(protected FormSvc: FormService,
				protected langSvc: LanguageService,
				protected cngPriceSvc: CngPriceService,
				protected cd: ChangeDetectorRef,
				protected authSvc: AuthService) {
		super(FormSvc, langSvc, cngPriceSvc, cd);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	getValues(value) {
		let val = super.getValues(value);
		val['mandatory_insurance_price'] = this.getSelectedPrice();
		return val;
	}

	getField() {
		return SelectField.create({
			key: "mandatory_insurance_prices",
			type: "Select",
			controlType: "FlatSelect",
			label: "Mandatory Insurance Prices",
			isMultiple: false,
			dynamicOptions: true,
			componentGroupId: this.componentGroupId
		});
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}
}