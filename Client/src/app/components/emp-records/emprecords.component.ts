import {Component } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable, Subscription } from 'rxjs';

import { EmpRecordsService } from '../../../core/emprecords.service';

@Component({
	selector: 'emp-records',
	templateUrl: './emprecords.component.html',
  	styleUrls: ['./emprecords.component.css']
})
export class EmpRecordsComponent {
	files : FileList;
	response: Observable<any>;
	message: string;
	error: boolean;
	constructor(private empRecordService: EmpRecordsService) {
	}

	getFiles(event){ 
        this.files = event.target.files;
    }

    submitFile() {
    	this.response = this.empRecordService.fileUpload(this.files);
    	this.response.subscribe((res) =>{ 
    		let checkErr=res._body.split(':');
    		if(checkErr.length>1) this.error=true;
    		else this.error=false;
    		this.message = res._body;
    	});
    	setTimeout(() => {
    		this.message=null;
    	}, 5000)
    }
}