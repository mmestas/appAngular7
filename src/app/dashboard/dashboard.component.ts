import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DashboardList } from '../demo';
import { ApiSrvc } from '../api-srvc.service';
import { JsonDatePipe } from '../json-date.pipe';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashList: DashboardList[];

  constructor(private apiSrvc: ApiSrvc) { }

  ngOnInit() {
    this.showDashboardList();
  }

  showDashboardList():  void {
      console.log(this);
      this.apiSrvc.getDashboardList()
    .subscribe(dashList => this.dashList = dashList['data']);

    console.log(this);
  }

}
