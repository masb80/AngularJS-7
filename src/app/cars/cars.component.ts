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

  // Until here is the GET cars from Databases

  // folowing is the storing data in databases

  car = new Car('', 0);


addCar(f) {
  this.error = '';
  this.success = '';

  this.dataService.store(this.car)
    .subscribe(
      (res: Car[]) => {
        // Update the list of cars
        this.cars = res;

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        f.reset();
      },
      (err) => this.error = err
    );
}
// end of adding the data in databases

// starting of data updating in databases

updateCar(name, price, id) {
  this.success = '';
  this.error = '';

  this.dataService.update({ model: name.value, price: price.value, id: +id })
    .subscribe(
      (res) => {
        this.cars    = res;
        this.success = 'Updated successfully';
      },
      (err) => this.error = err
    );
}



}



export class Car {
  constructor(
    model: string,
    price: number,
    id?:   number) {}
}


