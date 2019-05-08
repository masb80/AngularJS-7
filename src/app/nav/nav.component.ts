import { Component, OnInit } from '@angular/core';
import{ DataService } from '../data.service'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nav', // eta app.component.html e call korbo <app-nav></app-nav> hishebe
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  apptitle: string ='Byos'
/*
 cars: Car[];
  error = '';
  success = '';    

  users: Object;
  userForm: FormGroup;
 
  constructor(private dataService: DataService, private fb: FormBuilder) { } // dat aobject create korche dara.service.ts file theke, mean service theke

  ngOnInit() {
    this.getUsers(); 
    this.userForm = this.fb.group({
      userControl: ['Byos Users']
    });
  }
  getUsers(): void {
    this.dataService.getAll().subscribe(
      (res: Car[]) => {
        this.cars = res;
        console.log(this.cars);
      },
      (err) => {
        this.error = err;
      }
    );
    */

 users: User[];
 error = '';
 success = '';    

// users: Object;
 userForm: FormGroup;

 constructor(private dataService: DataService, private fb: FormBuilder) { } // dat aobject create korche dara.service.ts file theke, mean service theke

 ngOnInit() {
   this.getUsers(); 
   this.userForm = this.fb.group({
     userControl: ['Byos Users']
   });
 }
 getUsers(): void {
   this.dataService.getByosUserAll().subscribe(
     (res: User[]) => {
       this.users = res;      
       console.log(this.users);
     },
     (err) => {
       this.error = err;
     }
   );
 }
  }



export class User {
  constructor(
    name: string,    
    id?:   number) {}
}
