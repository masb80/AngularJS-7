import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' // this is for collecting data from a API


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
}
