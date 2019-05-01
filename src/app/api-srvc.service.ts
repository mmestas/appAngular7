import { Injectable } from '@angular/core';
// import {Http, Response} from "@angular/http";
import { Demo } from './demo';
import { ComplexDemo } from './demo';
import { DashboardList } from './demo';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiSrvc {

  dashboardListUrl = 'http://monette-demo.kmacloud.net/admin/index.php?remotemethodaddon=DemoDashboardArray';
  demoListUrl = 'http://monette-demo.kmacloud.net/admin/index.php?remotemethodaddon=DemoRemoteMethod';
  complexObjUrl = 'http://monette-demo.kmacloud.net/admin/index.php?remotemethodaddon=DemoComplexObject';

  constructor(
    private http: HttpClient,
  ) { }

  getDemoList (): Observable<Demo[]> {
    return this.http.get<Demo[]>(this.demoListUrl)
      .pipe();
  }

  getComplexObject(): Observable<ComplexDemo[]> {
    return this.http.get<ComplexDemo[]>(this.complexObjUrl)
      .pipe();
  }

  getDashboardList(): Observable<ComplexDemo[]> {
    console.log('getDashboardList');
    return this.http.get<DashboardList[]>(this.dashboardListUrl)
      .pipe();
  }


}
