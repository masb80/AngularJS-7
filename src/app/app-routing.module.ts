import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //  importing from home component
import { AboutComponent } from './about/about.component'; //  importing from about component
import { ContactComponent } from './contact/contact.component'; //  importing from contact component
import { CarsComponent } from './cars/cars.component'; // for car component
import {  AlertListsComponent } from './alert-lists/alert-lists.component'; // for alert-lists component
import { CommandsComponent } from './commands/commands.component'; // for commands component
import { SecurityValuesComponent } from './security-values/security-values.component'; // for security-valus component
import { UsersComponent } from './users/users.component'; // for security-valus component



// routes of app like django and laravel

const routes: Routes = [ 
  {path: '', component: HomeComponent},  //  home routing path
  {path: 'about', component: AboutComponent}, // about routing path
  {path: 'contact', component: ContactComponent}, // contact routing path
  {path: 'cars', component: CarsComponent}, // contact routing cars
  {path: 'alert-lists', component: AlertListsComponent}, // contact routing alert-lists
  {path: 'commands', component: CommandsComponent}, // contact routing commands
  {path: 'security-values', component: SecurityValuesComponent}, // contact routing security-values
  {path: 'users', component: UsersComponent} // contact routing security-values
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
