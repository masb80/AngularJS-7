import { Component } from '@angular/core';   // eta holo import ja top e thake

@Component({     // eta holo component decorator jate kii ki ache ta bola thake
  selector: 'app-root', //ei unique name er maddhome difference area of app ke reference deya jay
  templateUrl: './app.component.html', // konta html use hobe ta bole dicche
  styleUrls: ['./app.component.scss'] // style os the html
})

// component logic ekhane thake ei component er

export class AppComponent { 
  title = 'ng7';
}
