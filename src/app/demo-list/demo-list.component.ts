import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo';
import { ApiSrvc } from '../api-srvc.service';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss']
})
export class DemoListComponent implements OnInit {
  demoList: Demo[];

  constructor(private apiSrvc: ApiSrvc) { }

  ngOnInit(): void {
    this.getDemoList();
  }

  getDemoList(): void {
    this.apiSrvc.getDemoList()
      .subscribe(demoList => this.demoList = demoList);
      console.log(this)
  }

}
