import { Component, Input, OnInit} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
	CustomElementInputComponent, FormService, CngDataDTO,
	FormField, SelectField, LanguageService, ILanguage, OptionDTO,
	FormSettingsDTO, ComponentDTO, IUser, AuthService, CngPriceService
} from '@signature-it/ngx-generic';
import {Observable} from "rxjs/index";
import {PriceSelectComponent} from "../price-select/price-select.component";
import {ProtectionsInsurancePricesComponentModule} from "./protections-insurance-prices.module";
declare let _: any;

@Component({
	selector: 'protections-insurance-prices',
	templateUrl: '../price-select/price-select.component.html',
	styleUrls: ['../price-select/price-select.component.scss']
})
export class ProtectionsInsurancePricesComponent extends PriceSelectComponent implements OnInit {
	@Input() componentGroupId;
	@Input() id = '';
	priceAsToken = true;

	constructor(protected FormSvc: FormService,
				protected langSvc: LanguageService,
				protected cngPriceSvc: CngPriceService,
				protected authSvc: AuthService) {
		super(FormSvc, langSvc, cngPriceSvc);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	getValues(value) {
		let val = super.getValues(value);
		val['additional_protections_price'] = this.getSelectedPrice();
		return val;
	}

	getField() {
		return SelectField.create({
			key: "additional_protections",
			type: "Select",
			controlType: "FlatSelect",
			label: "Protections Insurance Prices",
			isMultiple: false,
			dynamicOptions: true,
			componentGroupId: this.componentGroupId
		});
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}

}