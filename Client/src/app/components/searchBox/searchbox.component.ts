import {Component} from "@angular/core";

import { EmpRecordsService } from '../../../core/emprecords.service';

@Component({
	 selector:"search-box",
	 templateUrl: "./searchbox.component.html",
	 styleUrls: ["./searchbox.component.css"]

})
export class SearchBoxComponent {
	search: number;
	response: any;
	constructor(private empRecordService: EmpRecordsService) {

	}

	getDetails() {
		this.empRecordService.empSearchById(this.search)
							.subscribe((res) => this.response = JSON.parse(res._body));
	}
}