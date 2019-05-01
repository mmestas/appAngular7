import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 7 app';
}
export interface Config {
  demoListUrl: string;
  complexObjUrl: string; //Not sure if this is necessary
}
