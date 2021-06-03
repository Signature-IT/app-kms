import {Component, Input, OnInit} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {FormControl } from '@angular/forms';
import {CustomElementInputComponent, FormService, CngDataDTO} from '@signature-it/ngx-generic';

@Component({
	selector: 'from-to-date',
	templateUrl: 'from-to-date.component.html',
	styleUrls: ['from-to-date.component.scss']
})
export class FromToDateComponent extends CustomElementInputComponent implements OnInit {
	op: number;
	@Input() fromField = '';
	@Input() toField = '';
	@Input() id = '';

	today = new Date();
	inAyear = new Date();
	nextMonth = new Date();
	manualDate = new Date();
	inAyearPlusMonth = new Date();
	inAyearFormated: string;
	inAyearPlusMonthFormated: string;
	customValue = new FormControl();

	constructor(protected FormSvc: FormService,
				protected DateAdapter: DateAdapter<any>) {
		super(FormSvc);
		this.DateAdapter.setLocale(this.getLangCode());
		this.inAyear = this.getToDate(this.today);
		this.nextMonth.setMonth(this.today.getMonth() + 1);
		this.nextMonth.setDate(1);
		this.inAyearPlusMonth.setMonth(this.nextMonth.getMonth() + 12);
		this.inAyearPlusMonth.setDate(0);
		this.inAyearFormated = `${this.inAyear.getDate()}/${this.inAyear.getMonth() + 1}/${this.inAyear.getFullYear()}`;
		this.inAyearPlusMonthFormated =  `${this.inAyearPlusMonth.getDate()}/${this.inAyearPlusMonth.getMonth() + 1}/${this.inAyearPlusMonth.getFullYear()}`;
	}

	ngOnInit() {
		super.ngOnInit();
	}

	getLangCode() {
		return 'he';
	}

	fieldChange(field) {
		switch (this.op) {
			case 1:
				this.customValue.setValue('');
				this._updateValues(this.getUTCDate(this.today), this.getUTCDate(this.inAyear));
				break;
			case 2:
				this.customValue.setValue('');
				this._updateValues(this.getUTCDate(this.nextMonth), this.getUTCDate(this.inAyearPlusMonth));
				break;
			case 3:
				if(!this.customValue.value || !this.customValue.value.isValid()) {
					this._updateValues('','');
				}
				break;
		}
	}

	getUTCDate(date) {
		return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())/1000;
	}

	onDateChange(event) {
		const from = this.getUTCDate(new Date(event.value));
		const to = this.getUTCDate(this.getToDate(new Date(from * 1000)));
		this._updateValues(from, to);
	}

	getToDate(fromDate) {
		const inAyear = new Date(fromDate);
		if(fromDate.getDate() < 27) {
			inAyear.setMonth(fromDate.getMonth() + 11);
		} else {
			inAyear.setMonth(fromDate.getMonth() + 12);
		}
		inAyear.setDate(0);
		return inAyear;
	}

	_updateValues(from, to) {
		this.isValid = from && to ? true: false;
		let val = {};
		val[this.fromField] = from;
		val[this.toField] = to;
		this.updateValues(val);
	}

}