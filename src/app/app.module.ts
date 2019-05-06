import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // ekahne first httpClientModule load kora hoyeche
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CarsComponent
  ],
  imports: [ // ekhanei first je kono module load kore
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // for http client
    ReactiveFormsModule // for formas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
