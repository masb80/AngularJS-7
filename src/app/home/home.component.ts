import { Component, OnInit } from '@angular/core';
import{ DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;

  users: Object;

  constructor(private data: DataService) { } // dat aobject create korche dara.service.ts file theke, mean service theke

  ngOnInit() { // eta engular lifecycle method
    this.data.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

  firstClick(){
    this.h1Style = true;
    this.data.fromDataService(); // data diye ei fnction takee call korche
  }

  secondClick(){
    console.log("second button clicked");
  }

  thirdClick(){
    this.data.fromDataService(); // // data diye ei fnction takee call korche 
  }
}

