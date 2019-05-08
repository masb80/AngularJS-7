import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http' // this is for collecting data from a API

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Car } from './cars/cars.component';
import { User } from './users/users.component';
import { Alerts } from './alert-lists/alert-lists.component';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any;  
  alerts: any;

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
    return this.http.get(`http://localhost/api/list`).pipe(
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

// until in here the gettin data fro dataases
// for Store data in database or sending data to databases

  store(car: Car): Observable<Car[]> {
    return this.http.post(`${this.baseUrl}/store`, { data: car })
      .pipe(map((res) => {
        this.cars.push(res['data']);
        return this.cars;
      }),
      catchError(this.handleError));
}

// end of data adding to the server or mysql databases

// starting the updating data in databases

update(car: Car): Observable<Car[]> {
  return this.http.put(`${this.baseUrl}/update`, { data: car })
    .pipe(map((res) => {
      const theCar = this.cars.find((item) => {
        return +item['id'] === +car['id'];
      });
      if (theCar) {
        theCar['price'] = +car['price'];
        theCar['model'] = car['model'];
      }
      return this.cars;
    }),
    catchError(this.handleError));
}
// deleting the updating data in databases

delete(id: number): Observable<Car[]> {
  const params = new HttpParams()
    .set('id', id.toString());

  return this.http.delete(`${this.baseUrl}/delete`, { params: params })
    .pipe(map(res => {
      const filteredCars = this.cars.filter((car) => {
        return +car['id'] !== +id;
      });
      return this.cars = filteredCars;
    }),
    catchError(this.handleError));
}

getByosUserAll(): Observable<User[]> {
   
  // return this.http.get(`${this.baseUrl}/list.php`).pipe(
  return this.http.get(`http://localhost/api/listUser`).pipe(
    map((res) => {
      this.users = res['data'];
      return this.users;
  }),
  catchError(this.handleErrorUser));
}

private handleErrorUser(error: HttpErrorResponse) {
  console.log(error);
 
  // return an observable with a user friendly message
  return throwError('Error! something went wrong to get User data.');
}

// Getting alerts from databases

getAlertsAll(): Observable<Alerts[]> {   
  // return this.http.get(`${this.baseUrl}/list.php`).pipe(
  return this.http.get(`http://localhost/api/listAlerts`).pipe(
    map((res) => {
      this.alerts = res['data'];
      return this.alerts;
  }),
  catchError(this.handleErrorAlerts));
}

private handleErrorAlerts(error: HttpErrorResponse) {
  console.log(error);
 
  // return an observable with a user friendly message
  return throwError('Error! something went wrong to get alerts data.');
}

}

