import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportsServiceService } from '../reports-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reports-table',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './reports-table.component.html',
  styleUrl: './reports-table.component.css',
  providers: [ReportsServiceService],
})
export class ReportsTableComponent {
  //userData: any = [];
  userData$: Observable<any> | undefined;
  //Dependencies Injection
  constructor(private _reportService: ReportsServiceService) {
    //let user = this._reportService.getData();
    // console.log(user);
    //   this._data = _reportService.getData();
    // this._reportService.getData().subscribe((data) => {
    //   this.userData = data;
    //   console.log(data);
    // });
    // getData() {
    //   // this._reportService.getData().subscribe((data) => {
    //   //   this.userData = data;
    //   //   console.log(data);
    //     //using subscribe we diivde the data and fetch one by one.
    //   });
  }
  getReportsCollection(){
    
  }
  getOrdersForTheReportCollection(){
    this.userData$ = this._reportService.getReportCollection();
  }
  getData() {
    this.userData$ = this._reportService.getData();
    console.log(this.userData$);
  }
}
