import { Component, Input, OnInit} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomElementInputComponent, FormService, CngDataDTO,
	FormField, SelectField, LanguageService, ILanguage, OptionDTO, Template,
	FormSettingsDTO, ComponentDTO, IUser, CngPriceService, ComponentFullDTO} from '@signature-it/ngx-generic';
import {Observable, throwError} from "rxjs/index";
import {catchError, map} from "rxjs/operators";

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
	user: IUser;
	options: OptionDTO[];
	priceAsToken = false;
	originalPricingTemplates: any;
	flag = false;

	constructor(protected FormSvc: FormService,
				protected langSvc: LanguageService,
				protected cngPriceSvc: CngPriceService,) {
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
					let options = OptionDTO.createFromComponents(components, true);
					this.field.options = options;
					this.options = options;
					this.subscribeAns();
					this.subscribeCng();
					this.subscribeFieldChanges();
				});
				this.form.addControl(this.field.key, new FormControl(this.field.getValue(), [Validators.required]));
			}
		});

	}

	getField(): SelectField {
		return SelectField.create({});
	}

	fieldChange(e) {
		const val = this.getValues(e.value);
		this.updateValues(val);
	}

	getValues(value) {
		let val = {};
		val[this.id] = value;
		return val;
	}

	getSelectedPrice() {
		const s = _.filter(this.field.options, { key: this.form.value[this.field.key] })[0];
		return s[0]['pricingTemplate'] ?  s[0]['pricingTemplate']['price']: 0;
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.value);
	}

	getPriceAndCalc(options) {
		if(!this.ans) return options;
		const templateVars = options.map(o => o['comp_price_template_var_s']).filter(t => t);
		if(templateVars.length) {
			this.cngPriceSvc.getPrice(templateVars).subscribe(pricingTemplates => {
				this.originalPricingTemplates = pricingTemplates;
				return this.calcPrice(options);
			});
		}
		return options;
	}

	calcPrice(options) {
		if(!this.originalPricingTemplates) return options;
		let pricingTemplates = Template.createFromArray(this.originalPricingTemplates);
		pricingTemplates = this.cngPriceSvc.calcPrice(pricingTemplates, this.ans);
		_.forEach(options, (o) => {
			o['pricingTemplate'] = pricingTemplates.filter((pt:Template) => pt.templateVar == o['comp_price_template_var_s'])[0];
		});
		return options;
	}

	subscribeAns() {
		this.FormSvc.values$.subscribe(({values, skipUpdateDynamicField}) => {
			this.ans = this.ans ? {...this.ans,...values}: values;
			if(this.options.length) {
				if(!this.flag) {
					this.flag = true;
					this.field.options = this.getPriceAndCalc(this.options);
				} else {
					this.field.options = this.calcPrice(this.field.options);
				}
			}
			if(this.form.controls[this.id] && !this.form.controls[this.id].value) {
				this.initDefaultValues();
			}
		});
	}

	subscribeFieldChanges() {
		this.FormSvc.onFieldValuesChanged$.subscribe(({key, values, removeValues}) => {
			if (key != this.id || !this.field['options'].length) return;
			if (values) {
				this.field['options'] = this.options.filter(v => values.includes(parseInt(v['key'])));
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