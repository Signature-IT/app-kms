import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {GenericConfig, SolrFilterFieldsComponentGeneric ,FormService, SolrService, SolrRequestOptionsDTO} from '@signature-it/ngx-generic';
@Component({
    selector: 'solr-filter-fields',
    templateUrl: '../../../../../projects/signature-it/ngx-generic/src/lib/components/forms/custom-element-input/solr-filter-fields/solr-filter-fields.component.html',
    styleUrls: ['../../../../../projects/signature-it/ngx-generic/src/lib/components/forms/custom-element-input/solr-filter-fields/solr-filter-fields.component.scss']
})
export class SolrFilterFieldsComponent extends SolrFilterFieldsComponentGeneric implements OnInit {
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
		this._updateValues();
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

	_updateValues() {
		let val = {};
		val['moto_manufacturer'] = this.myForm.controls.name_ss.value;
		val['moto_year_manufacture'] = this.myForm.controls.year_is.value;
		val['moto_model'] = this.myForm.controls.model_ss.value;
		val['moto_cc'] = this.myForm.controls.NEFA_ss.value;
		this.isValid = !val['moto_manufacturer'] || !val['moto_year_manufacture'] || !val['moto_model'] || !val['moto_cc']? false: true;
		if(this.responseDocs && this.isValid) {
			val['ABS'] = this.responseDocs[0]['ABS_s'] || '0';
			val['EBA'] = this.responseDocs[0]['EBA_s'] || '0';
			val['ASC'] = this.responseDocs[0]['ASC__s'] || '0';
			val['TCS'] = this.responseDocs[0]['TCS_s'] || '0';
			val['CBS'] = this.responseDocs[0]['CBS_s'] || '0';
			val['tricycle'] = this.responseDocs[0]['tricycle_s'] || '0';
		}
		this.updateValues(val);
	}

}
