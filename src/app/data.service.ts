import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http' // this is for collecting data from a API

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Car } from './cars/cars.component';



@Injectable({
  providedIn: 'root'
})
export class DataService {  

  constructor(private http: HttpClient) { }

  fromDataService(){
    console.log("Third button clicked");
  }

  getUser(){
    return this.http.get('https://reqres.in/api/users'); // fron this live API I am collecting the data and showing in home.components.html
  }

  baseUrl = 'http://localhost/api';
  cars: Car[];
  
  getAll(): Observable<Car[]> {
   
    // return this.http.get(`${this.baseUrl}/list.php`).pipe(
    return this.http.get(`http://localhost/api/list.php`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}

