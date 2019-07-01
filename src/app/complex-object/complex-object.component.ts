import { Component, OnInit } from '@angular/core';
import { ComplexDemo } from '../demo';
import { ApiSrvc } from '../api-srvc.service';

@Component({
  selector: 'app-complex-object',
  templateUrl: './complex-object.component.html',
  styleUrls: ['./complex-object.component.scss']
})
export class ComplexObjectComponent implements OnInit {
  complexObj: ComplexDemo[];

  constructor(private apiSrvc: ApiSrvc) { }

  ngOnInit(): void {
    this.showComplexObject();
  }

  showComplexObject():  void {
      console.log(this);
      this.apiSrvc.getComplexObject()
    .subscribe(complexObj => this.complexObj = complexObj['data']);

    console.log(this);
  }

  myVar = 'my crazy var';

}
