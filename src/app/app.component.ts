import { Component } from '@angular/core';
import { Data1Service } from './data1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Data1Service]
})
export class AppComponent {
  title = 'Subjectmethod';
  changedTitle = "App Ts changes"


  constructor(private dataservice:Data1Service){

  }
}
