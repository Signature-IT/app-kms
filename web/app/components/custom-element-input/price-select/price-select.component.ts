import {Component, Input, OnInit} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomElementInputComponent, FormService, CngDataDTO,
	FormField, SelectField, LanguageService, ILanguage, OptionDTO, Template,
	FormSettingsDTO, ComponentDTO, IUser, CngPriceService, ComponentFullDTO} from '@signature-it/ngx-generic';
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
	field: SelectField;
	payLoad = '';
	form: FormGroup;
	protected currLang: Observable<ILanguage>;
	lang: ILanguage;
	selectedPrice: SelectField;
	user: IUser;
	options: OptionDTO[];
	priceAsToken = false;
	pricingTemplates: Template[];

	constructor(protected FormSvc: FormService,
				protected langSvc: LanguageService,
				protected cngPriceSvc: CngPriceService) {
		super(FormSvc);
		this.currLang = this.langSvc.getCurrentLanguage$();
	}

	ngOnInit() {
		this.currLang.subscribe(lang => {
			this.lang = lang;
			this.form = new FormGroup({});
			this.field = this.getField();
			if(this.field && this.componentGroupId) {
				const s = FormSettingsDTO.create({});
				s.hasFcc = true;
				s.fccFL = ['comp_price_template_var_s'];
				this.FormSvc.getComponentsFromSolr(this.lang, this.componentGroupId, '', s).subscribe((components: ComponentDTO[]) => {
					this.options = OptionDTO.createFromComponents(components, true);
					this.field.options = this.getPriceAndCalc();
				});
				this.form.addControl(this.field.key, new FormControl(this.field.getValue(), [Validators.required]));
				this.subscribeAns();
				this.sunscribeCng();
			}
		});

	}

	getField(): SelectField {
		return SelectField.create({});
	}

	fieldChange(e, field) {
		this.selectedPrice = field;
		const val = this.getValues(e.value);
		this.updateValues(val);
	}

	getValues(value) {
		let val = {};
		val[this.id] = value;
		return val;
	}

	getSelectedPrice() {
		return _.filter(this.field.options, { key: this.form.value[this.selectedPrice.key] })[0]['price'];
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}

	getPriceAndCalc() {
		if(!this.ans) return this.options;
		const templateVars = this.options.map(o => o['comp_price_template_var_s']).filter(t => t);
		if(templateVars.length) {
			this.cngPriceSvc.calcPrice(templateVars, this.ans).subscribe(templates => {
				this.pricingTemplates = templates;
				return this.calcPrice();
			});
		}
		return this.options;
	}

	calcPrice() {
		if(!this.pricingTemplates) return this.options;
		_.forEach(this.options, (o) => {
			o['pricingTemplate'] = this.pricingTemplates.filter((pt:Template) => pt.templateVar == o['comp_price_template_var_s'])[0];
		});
		return this.options;
	}

	subscribeAns() {
		this.FormSvc.values$.subscribe(({values, skipUpdateDynamicField}) => {
			this.ans = values;
			if(this.options) {
				this.field.options = this.calcPrice();
			}
			if(this.form.controls[this.id] && !this.form.controls[this.id].value) {
				this.initDefaultValues();
			}
			this.subscribeFieldChanges();
		});
	}

	subscribeFieldChanges() {
		this.FormSvc.onFieldValuesChanged$.subscribe(({key, values, removeValues}) => {
			if (key != this.id) return;
			if (values) {
				this.field['options'] = this.field['options'].filter(v => values.includes(parseInt(v['key'])));
				return;
			}
		});
	}

	initDefaultValues() {
		if(this.ans && this.ans[this.id]) {
			this.field.value = this.ans[this.id];
			this.form.controls[this.id].setValue(this.field.value);
		}
	}
}