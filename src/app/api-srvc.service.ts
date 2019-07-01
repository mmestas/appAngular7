import { Injectable } from '@angular/core';
// import {Http, Response} from "@angular/http";
import { ObservableObj } from './demo';

import { Demo } from './demo';
import { ComplexDemo } from './demo';
import { DashboardList } from './demo';
import { DragDropObj } from './demo';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpGetOptions  = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }
  ),
  withCredentials: true
};
const httpPostOptions =
{
    headers: new HttpHeaders (
        {
            "Content-Type": "application/x-www-form-urlencoded"
        }),
    withCredentials: true,
};

@Injectable({
  providedIn: 'root'
})
export class ApiSrvc {

  dashboardListUrl = 'http://addonlist.monette.sitefpo.com/admin?remotemethodaddon=DemoDashboardArray';
  demoListUrl = 'http://addonlist.monette.sitefpo.com/admin?remotemethodaddon=DemoRemoteMethod';
  complexObjUrl = 'http://addonlist.monette.sitefpo.com/admin?remotemethodaddon=DemoComplexObject';
  dragDropUrl = 'http://addonlist.monette.sitefpo.com/admin?remotemethodaddon=DemoDragDrop';
  memberbossDragDropUrl = 'http://memberboss.com/getaddonlist';
  memberbossPanelListUrl = 'http://memberboss.com/getaddonPanellist';
  memberbossAddonListUrl = 'http://memberboss.com/getAddonList';
  memberbossSetAddonListUrl = 'http://memberboss.com/setAddonList'; //Keep Correct
  // memberbossSetAddonListUrl = 'http://memberboss.com/setsampleaddonlist'; //Only for testing

  constructor(
    private http: HttpClient,
  ) { }

  getDemoList (): Observable<ObservableObj[]> {
    return this.http.get<ObservableObj[]>(this.demoListUrl)
      .pipe();
  }

  getComplexObject(): Observable<ObservableObj[]> {
    return this.http.get<ObservableObj[]>(this.complexObjUrl)
      .pipe();
  }

  getDashboardList(): Observable<ObservableObj[]> {
    return this.http.get<ObservableObj[]>(this.dashboardListUrl)
      .pipe();
  }

  getDragNDrop(): Observable<ObservableObj[]> {
    return this.http.post<ObservableObj[]>(this.memberbossDragDropUrl, {
        "parentContentGuid":"{02203F58-0921-4F75-A089-0EAD6E8FEB4F}",
        "parentRecordGuid":"{925F4A57-32F7-44D9-9027-A91EF966FB0D}"
      }, httpGetOptions)
      .pipe();
  }

  getPanelList(): Observable<ObservableObj[]> {
    // return this.http.post<ObservableObj[]>(this.memberbossPanelListUrl, {
    return this.http.post<ObservableObj[]>(this.dragDropUrl, {
        "parentContentGuid":"{02203F58-0921-4F75-A089-0EAD6E8FEB4F}",
        "parentRecordGuid":"{925F4A57-32F7-44D9-9027-A91EF966FB0D}"
      }, httpGetOptions)
      .pipe();
  }

  getMemberbossPanelList(): Observable<ObservableObj[]> {
    return this.http.post<ObservableObj[]>(this.memberbossPanelListUrl, {
        "parentContentGuid":"{02203F58-0921-4F75-A089-0EAD6E8FEB4F}",
        "parentRecordGuid":"{925F4A57-32F7-44D9-9027-A91EF966FB0D}"
      }, httpGetOptions)
      .pipe();
  }

  getMemberbossAddonList(): Observable<ObservableObj[]> {
    return this.http.post<ObservableObj[]>(this.memberbossAddonListUrl, {
        "parentContentGuid":"{02203F58-0921-4F75-A089-0EAD6E8FEB4F}",
        "parentRecordGuid":"{fc7bfeeb-c245-4bda-a552-c3fd413f7493}"
      }, httpGetOptions)
      .pipe();
  }

  // setMemberbossAddonList(data): Observable<ObservableObj[]> {
  setMemberbossAddonList(data) {
    console.log(data)
    // return this.http.post<ObservableObj[]>(this.memberbossSetAddonListUrl, {
    // return this.http.post(this.memberbossSetAddonListUrl, {
    //     "parentContentGuid": data.parentContentGuid,
    //     "parentRecordGuid": data.parentRecordGuid
    //   }, httpGetOptions)

    return this.http.post(this.memberbossSetAddonListUrl, {data}, httpGetOptions)

    // return this.http.post('http://memberboss.com/setsampleaddonlist?parentContentGuid='+data.parentContentGuid+'&parentRecordGuid='+data.parentRecordGuid)
      // return this.http.post('http://memberboss.com/setAddonlist?parentContentGuid='+data.parentContentGuid+'&parentRecordGuid='+data.parentRecordGuid)
      //
      // .pipe();
  }

  // getDragNDrop() {
  //   return this.http.post('http://memberboss.com/getaddonlist', {
  //     "parentContentGuid":"{02203F58-0921-4F75-A089-0EAD6E8FEB4F}",
  //     "parentRecordGuid":"{925F4A57-32F7-44D9-9027-A91EF966FB0D}"
  //   }, httpGetOptions)
  //     .pipe();
  // }

}
