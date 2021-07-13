import {Component, Input, OnInit} from '@angular/core';
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
	selector: 'property-insurance-prices',
	templateUrl: '../price-select/price-select.component.html',
	styleUrls: ['../price-select/price-select.component.scss']
})
export class PropertyInsurancePricesComponent extends PriceSelectComponent implements OnInit {
	@Input() componentGroupId;
	@Input() id = '';
	allowManualPrice = false;
	user: IUser;

	constructor(protected FormSvc: FormService,
				protected langSvc: LanguageService,
				protected cngPriceSvc: CngPriceService,
				protected authSvc: AuthService) {
		super(FormSvc, langSvc, cngPriceSvc);
	}

	ngOnInit() {
		super.ngOnInit();
		this.authSvc.currentUsersData$.subscribe((user: IUser) => {
			this.user = user;
			this.allowManualPrice = user.hasAcl('IS_MOKDAN');
		});
	}

	getField(): SelectField {
		return SelectField.create({
				key: "property_insurance_prices",
				type: "Select",
				controlType: "FlatSelect",
				label: "Property Insurance Prices",
				isMultiple: false,
				dynamicOptions: true
			});
	}

	getValues(value) {
		let val = super.getValues(value);
		val['property_insurance_price'] = this.getSelectedPrice();
		return val;
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}
}