import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/searchBox/searchbox.component';
import { SearchResultsComponent } from './components/search-results/searchresults.component';
import { EmpRecordsComponent } from './components/emp-records/emprecords.component';
import { FooterComponent } from './components/footer/footer.component';

import { EmpRecordsService } from '../core/emprecords.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpRecordsComponent,
    FooterComponent,
    SearchBoxComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmpRecordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
