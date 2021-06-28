import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {GenericConfig, SolrFilterFieldsComponentGeneric ,FormService, SolrService, SolrRequestOptionsDTO} from '@signature-it/ngx-generic';
@Component({
    selector: 'solr-filter-fields-motorcycles',
    templateUrl: '../../../../../projects/signature-it/ngx-generic/src/lib/components/forms/custom-element-input/solr-filter-fields/solr-filter-fields.component.html',
    styleUrls: ['../../../../../projects/signature-it/ngx-generic/src/lib/components/forms/custom-element-input/solr-filter-fields/solr-filter-fields.component.scss']
})
export class SolrFilterFieldsMotorcyclesComponent extends SolrFilterFieldsComponentGeneric implements OnInit {
	@Input() isCngInput: boolean;
	@Input() key;
	solrOptions: any;
	fields: any;
	myForm = new FormGroup({});
	isEmptyMandatory: boolean = true;
	currentField: number = 0;
	showVarietyForm: boolean = false;
	currentUserAcl: string[] = [];
	mandatoryFields: any = [];
	isEmptyForm: any = true;
	solrType: number;
	solrSearchMode: string;
	solrSearchField: string;
	selectedMoto: object;

	constructor(protected FormSvc: FormService,
				protected solrService: SolrService) {
		super(FormSvc, solrService);
	}

	ngOnInit() {
		this.isCngInput = true;
		super.ngOnInit();
	}

	valuesChanged(field) {
		super.valuesChanged(field);
		if(this.isValid) {
			this._updateValues();
		}
	}

	initDefaultValues() {
		this.initField('name_ss', 'moto_manufacturer');
		this.initField('year_is', 'moto_year_manufacture');
		this.initField('model_ss', 'moto_model');
		this.initField('NEFA_ss', 'moto_cc');
	}

	initField(fieldName, fieldAnsKey) {
		let fieldIndex = this.fields.find((f) => f.field == fieldName)?.index;
		if (fieldIndex && this.ans[fieldAnsKey]) {
			this.fields[fieldIndex - 1]['value'] = this.ans[fieldAnsKey];
		}
	}

	setReponseDoc(responses) {
		this.responseDocs = responses['response']['docs'];
		if(this.isValid) {
			this._updateValues();
		}
	}

	public get isValid() {
		return !this.myForm.controls.name_ss.value || !this.myForm.controls.year_is.value || !this.myForm.controls.model_ss.value || !this.myForm.controls.NEFA_ss.value? false: true;
	}

	_updateValues() {
		let val = {};
		val['moto_manufacturer'] = this.myForm.controls.name_ss.value;
		if(this.ans && this.ans['moto_year_manufacture'] && this.ans['moto_year_manufacture'] != this.myForm.controls.year_is.value) {
			val['old_new'] = '0';
		}
		val['moto_year_manufacture'] = this.myForm.controls.year_is.value;
		val['moto_model'] = this.myForm.controls.model_ss.value;
		val['moto_cc'] = this.myForm.controls.NEFA_ss.value;
		if(this.responseDocs) {
			this.sortLowerCost();
			this.selectedMoto = this.responseDocs[0];
			val = {...val, ...this.getVehicleData()};
			val['ABS'] = this.selectedMoto['ABS_s'] || '0';
			val['EBA'] = this.selectedMoto['EBA_s'] || '0';
			val['ASC'] = this.selectedMoto['ASC__s'] || '0';
			val['TCS'] = this.selectedMoto['TCS_s'] || '0';
			val['CBS'] = this.selectedMoto['CBS_s'] || '0';
			val['tricycle'] = this.selectedMoto['tricycle_s'] || '0';
		}
		this.updateValues(val);
	}

	sortLowerCost() {
		this.responseDocs.sort(function (a, b) {
			return parseFloat(a.cost_s) - parseFloat(b.cost_s);
		});
	}

	sunscribeCng() {
		this.FormSvc.cngData$.subscribe(cngData => {
			if(!cngData) return;
			this.cngData = cngData;
			if(this.selectedMoto && this.cngData.ans['old_new']) {
				let selectedMoto;
				if(this.cngData.ans['old_new'].value == 'Yes') {
					selectedMoto = this.responseDocs.filter(r => r['newold_s'] == '2')[0];
				} else {
					selectedMoto = this.responseDocs[0];
				}
				if(this.selectedMoto['id_s'] != selectedMoto['id_s']) {
					this.selectedMoto = selectedMoto;
					this.updateValues({...this.getVehicleData()});
				}
			}
		});
	}

	getVehicleData() {
		let val = {};
		val['vehicle_cost'] = parseFloat(this.selectedMoto['cost_s']);
		val['vehicle_cost_actual'] = parseFloat(this.selectedMoto['cost_s']);
		val['vehicle_generator'] = parseInt(this.selectedMoto['generator_s']);
		return val;
	}
}
