import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav', // eta app.component.html e call korbo <app-nav></app-nav> hishebe
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  apptitle: string ='Bhuiyan IT'

  constructor() { }

  ngOnInit() {
  }

}
