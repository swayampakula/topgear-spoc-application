import { Component, Input } from "@angular/core";

@Component({
	 selector:"search-results",
	 templateUrl: "./searchresults.component.html",
	 styleUrls: ["./searchresults.component.css"]

})

export class SearchResultsComponent{
	@Input() empDetails: any;
	
	constructor() {}
}