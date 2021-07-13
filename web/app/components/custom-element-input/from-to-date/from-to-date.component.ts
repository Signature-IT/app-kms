import {Component, Input, OnInit} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {FormControl } from '@angular/forms';
import {CustomElementInputComponent, FormService, CngDataDTO, SolrService, SolrRequestOptionsDTO} from '@signature-it/ngx-generic';

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
	formattedValue: any;
	maxDate = new Date();

	constructor(protected FormSvc: FormService,
				protected DateAdapter: DateAdapter<any>,
				protected solrService: SolrService) {
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
		this.setMaxDate();
		this.initDefaultValues();
	}

	getLangCode() {
		return 'he';
	}

	setMaxDate() {
		const solrOptions = new SolrRequestOptionsDTO({
			pageNumber: 1,
			itemsPerPage: 1,
			type_i: 100,
			sort: 'upload_date_s desc',
			isGroupBy: false
		});
		this.solrService.buildSolrUrl([], solrOptions, 0, 0).subscribe(r => {
			if(r['response'] && r['response']['docs'] && r['response']['docs'][0] && r['response']['docs'][0]['upload_date_s']) {
				const mY = r['response']['docs'][0]['upload_date_s'].split('/');
				let maxDate = new Date();
				maxDate.setMonth(mY[1]);
				maxDate.setFullYear(mY[0]);
				maxDate.setDate(0);
				this.maxDate = maxDate;
			}
		});
	}

	initDefaultValues() {
		if(this.ans && this.ans[this.id]) {
			this.op = parseInt(this.ans[this.id]);
			if(this.op == 3 && this.ans[this.fromField]) {
				this.customValue.setValue(new Date(this.ans[this.fromField] * 1000));
			}
		}
		if(!this.op) {
			this.op = 2;
			this.fieldChange();
		}
	}

	fieldChange(field = null) {
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
		if(fromDate.getDate() <= 27) {
			inAyear.setMonth(fromDate.getMonth() + 12);
		} else {
			inAyear.setMonth(fromDate.getMonth() + 13);
		}
		inAyear.setDate(0);
		return inAyear;
	}

	_updateValues(from, to) {
		this.isValid = from && to ? true: false;
		let val = {};
		val[this.fromField] = from;
		val[this.toField] = to;
		val[this.id] = this.op;
		this.updateValues(val);
	}

}