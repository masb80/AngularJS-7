import { Component, OnDestroy, OnInit } from '@angular/core';

import{ DataService } from '../data.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-alert-lists',
  templateUrl: './alert-lists.component.html',
  styleUrls: ['./alert-lists.component.css']
})
export class AlertListsComponent implements OnDestroy, OnInit {
  
  dtOptions: DataTables.Settings = {};
  
  alerts: Alerts[] = [];
  error = '';
  success = ''; 

  
  constructor(private dataService: DataService, private http: HttpClient) { }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.getAlerts();
  }

  getAlerts(): void {
    this.dataService.getAlertsAll().subscribe(
      (res: Alerts[]) => {
        this.alerts = res;
        console.log(this.alerts);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }


}

export class Alerts {
  constructor(
    name: string,
    alert: string,
    type: string,
    date?:   Date) {}
}