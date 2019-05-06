import { Component, OnInit } from '@angular/core';

//import { Car } from './cars/cars.component';
import{ DataService } from '../data.service'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {

  cars: Car[];
  error = '';
  success = '';       

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCars();
  }
  getCars(): void {
    this.dataService.getAll().subscribe(
      (res: Car[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}



export class Car {
  constructor(
    model: string,
    price: number,
    id?:   number) {}
}