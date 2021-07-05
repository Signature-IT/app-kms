import {Component, Input, OnInit} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomElementInputComponent, FormService, CngDataDTO,
	FormField, SelectField, LanguageService, ILanguage, OptionDTO,
	FormSettingsDTO, ComponentDTO, IUser} from '@signature-it/ngx-generic';
import {Observable} from "rxjs/index";

declare let _: any;

@Component({
	selector: 'price-select',
	templateUrl: 'price-select.component.html',
	styleUrls: ['price-select.component.scss']
})
export class PriceSelectComponent extends CustomElementInputComponent implements OnInit {
	@Input() componentGroupId;
	@Input() id = '';
	fields: SelectField[];
	payLoad = '';
	form: FormGroup;
	protected currLang: Observable<ILanguage>;
	lang: ILanguage;
	allowManualPrice = false;
	manualPrice = new FormControl({value: '', disabled: true});
	manualDiscount = new FormControl({value: '', disabled: true});
	manualCost = new FormControl();
	selectedPrice: SelectField;
	user: IUser;

	constructor(protected FormSvc: FormService,
				protected langSvc: LanguageService) {
		super(FormSvc);
		this.currLang = this.langSvc.getCurrentLanguage$();
	}

	ngOnInit() {
		super.ngOnInit();
		this.currLang.subscribe(lang => {
			this.lang = lang;
			this.form = new FormGroup({});
			this.fields = this.getFields();
			this.fields.forEach((field: SelectField) => {
				if(this.componentGroupId) {
					this.FormSvc.getComponentsFromSolr(this.lang, field.componentGroupId, '', FormSettingsDTO.create({})).subscribe((components: ComponentDTO[]) => {
						let options = OptionDTO.createFromComponents(components);
						field.options = this.calcPrice(options);
					});
					this.form.addControl(field.key, new FormControl(field.getValue(), [Validators.required]));
				}
			});
		});

	}

	getFields() {
		return [];
	}

	fieldChange(e, field) {
		if(this.allowManualPrice) {
			this.manualPrice.enable();
			this.manualDiscount.enable();
		}
		this.selectedPrice = field;
	}

	getSelectedPrice() {
		let options = _.filter(this.fields, {key: this.selectedPrice.key})[0]['options'];
		return _.filter(options, { key: this.form.value[this.selectedPrice.key] })[0]['price'];
	}

	manualPriceChange(field) {
		const val = {
			'manual_price': this.manualPrice.value,
			'manual_user': this.user.user_id,
			'manual_discount_modification': Math.round(new Date().getTime()/1000)
		};
		this.updateValues(val);
	}

	manualDiscountChange(field) {
		const val = {
			'manual_price': this.getSelectedPrice() * (1 - this.manualDiscount.value/100),
			'manual_user': this.user.user_id,
			'manual_discount_modification': Math.round(new Date().getTime()/1000)
		};
		this.updateValues(val);
	}

	manualCostChange(field) {
		const val = {
			'vehicle_cost_actual': parseFloat(this.manualCost.value),
			'manual_user': this.user.user_id
		};
		this.updateValues(val);
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}

	calcPrice(options) {
		options.forEach(op => {
			op['price'] = 3756;
		});
		return options;
	}

}