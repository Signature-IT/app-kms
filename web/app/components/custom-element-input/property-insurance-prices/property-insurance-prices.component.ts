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
	templateUrl: './property-insurance-prices.component.html',
	styleUrls: ['../price-select/price-select.component.scss']
})
export class PropertyInsurancePricesComponent extends PriceSelectComponent implements OnInit {
	@Input() componentGroupId;
	@Input() id = '';
	user: IUser;
	allowManualPrice = false;
	manualPrice = new FormControl({value: '', disabled: true});
	manualDiscount = new FormControl({value: '', disabled: true});
	manualCost = new FormControl();

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
				key: "additional_insurance_prices",
				type: "Select",
				controlType: "FlatSelect",
				label: "Property Insurance Prices",
				isMultiple: false,
				dynamicOptions: true
			});
	}

	getValues(value) {
		let val = super.getValues(value);
		val['additional_insurance_price'] = this.getSelectedPrice();
		return val;
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}

	fieldChange(e) {
		super.fieldChange(e);
		if(this.allowManualPrice) {
			this.manualPrice.enable();
			this.manualDiscount.enable();
		}
		this.manualDiscountChange();
	}

	manualPriceChange(field) {
		const val = {
			'manual_price': this.manualPrice.value? parseFloat(this.manualPrice.value): 0,
			'manual_user': this.user.user_id,
			'manual_discount_modification': Math.round(new Date().getTime()/1000)
		};
		this.updateValues(val);
	}

	manualDiscountChange() {
		if(this.manualDiscount.value) {
			const val = {
				'manual_price': this.getSelectedPrice() * (1 - this.manualDiscount.value/100),
				'manual_user': this.user.user_id,
				'manual_discount_modification': Math.round(new Date().getTime()/1000)
			};
			this.manualPrice.setValue(val.manual_price);
			this.updateValues(val);
		}
	}

	manualCostChange() {
		const val = {
			'vehicle_cost_actual': this.manualCost.value ? parseFloat(this.manualCost.value): this.ans['vehicle_cost'],
			'manual_user': this.user.user_id
		};
		this.updateValues(val);

		this.manualDiscountChange();
	}
}