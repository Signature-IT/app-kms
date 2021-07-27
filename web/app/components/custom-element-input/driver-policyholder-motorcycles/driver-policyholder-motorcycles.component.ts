import {Component, Input, OnInit} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
	CustomElementInputComponent,
	FormService,
	CngDataDTO,
	SolrService,
	SolrRequestOptionsDTO,
	FormSettingsDTO, ComponentDTO, OptionDTO,DateFormatPipe} from "@signature-it/ngx-generic";
import {ProductFieldDTO} from "../../../../../projects/signature-it/ngx-catalogue/src/lib/models";

@Component({
	selector: 'policy-owner-and-driver-motorcycles',
	templateUrl: 'driver-policyholder-motorcycles.component.html',
	styleUrls: ['driver-policyholder-motorcycles.component.scss']
})
export class DriverPolicyholderMotorcyclesComponent extends CustomElementInputComponent implements OnInit {
	op: boolean;
	policyholder: number = 0;
	selectedDate: any;
	values: any;
	@Input() id = '';
	allDates : Array<any> = [];
	constructor(protected FormSvc: FormService) {
		super(FormSvc);
	}

	ngOnInit() {
		super.ngOnInit();
		this.initDefaultValues();
		this.subscribeAns();
		this.updateFormAfterLoaded();
	}

	initDefaultValues() {
		if(this.ans && this.ans[this.id] ) {
			this.values = JSON.parse(this.ans[this.id]);
			this.op = this.values['op'];
			this.policyholder = this.values['policyholder'];
			this.selectedDate = this.values['value'];
		}
	}

	subscribeAns() {
		this.FormSvc.values$.subscribe(({values, skipUpdateDynamicField}) => {
			this.ans = this.ans ? {...this.ans,...values}: values;
			if (this.ans && this.ans['drivers']) {
				if(this.ans['drivers'] == "333"){
					this.allDates = [];
					this.op = false;
				}else{
					this.op = this.validateDriversAge();
				}
			}
		});
	}

	validateDriversAge(){
		var index, age, dateView,dateFormated;
		if(this.ans['driver_birthdate']) {
			 age = this.calculateAge(this.ans['insurance_from_date'], this.ans['driver_birthdate']);
			 index = this.allDates.findIndex(x => x.value=="1");
			if (age > 18) {
				 dateView = new Date(this.ans['driver_birthdate'] * 1000);
				 dateFormated = `${dateView.getDate()}/${dateView.getMonth() + 1}/${dateView.getFullYear()}`;
				index === -1 ? this.allDates.push({value: '1', date: dateFormated}) : this.allDates[index].date = dateFormated;
			}else if(index > -1){
				this.allDates.splice(index, 1);
			}
		}
		if(this.ans['driver_2_birthdate']){
			 age = this.calculateAge(this.ans['insurance_from_date'],this.ans['driver_2_birthdate']);
			 index = this.allDates.findIndex(x => x.value == "2");
			if(age > 18 && this.ans['drivers'] == "335"){
				 dateView = new Date(this.ans['driver_2_birthdate'] * 1000);
				 dateFormated = `${dateView.getDate()}/${dateView.getMonth() + 1}/${dateView.getFullYear()}`;
				index === -1 ? this.allDates.push({value:'2',date:dateFormated}) : this.allDates[index].date = dateFormated;
			}else if(index > -1){
				this.allDates.splice(index, 1);
			}
		}
		return (this.allDates && this.allDates.length > 0)? true: false;
	}

	calculateAge(endDate,birthday) { // birthday is a date
		let timeDiff = Math.abs(endDate - birthday);
		let age = Math.floor((timeDiff / (3600 * 24))/365.25);
		console.log(age);
		return age;
	}

	onPolicyholderChange(val = null) {
		if(val.value == 1 && this.allDates.length == 1){
			this._updateValues(this.allDates[0]);
		}
	}

	onDateSelect(field = null) {
		var index = this.allDates.findIndex(x => x.value == field['value']);
		this._updateValues(this.allDates[index]);
	}

	_updateValues(selectedDate) {
		let val = {};
		this.values = selectedDate;
		this.values['op'] = this.op;
		this.values['policyholder'] = this.policyholder;
		val[this.id] = JSON.stringify(this.values);
		val['policy_owner_birthdate'] = selectedDate['date'];
		this.updateValues(val);
	}

}
