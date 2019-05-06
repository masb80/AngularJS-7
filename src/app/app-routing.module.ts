import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //  importing from home component
import { AboutComponent } from './about/about.component'; //  importing from about component
import { ContactComponent } from './contact/contact.component'; //  importing from contact component
import { CarsComponent } from './cars/cars.component';

// routes of app like django and laravel

const routes: Routes = [ 
  {path: '', component: HomeComponent},  //  home routing path
  {path: 'about', component: AboutComponent}, // about routing path
  {path: 'contact', component: ContactComponent}, // contact routing path
  {path: 'cars', component: CarsComponent} // contact routing cars
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
