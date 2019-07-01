import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { DndDragImageOffsetFunction } from "ngx-drag-drop";
import { ApiSrvc } from '../api-srvc.service';
import { JsonDatePipe } from '../json-date.pipe';
import { SafeHTMLPipe } from '../safe-html.pipe';
import { CustomFilterPipe } from '../custom-filter.pipe';

interface memberBossObj {
  name:string;
  image:string;
  html:string;
  isStructural?:boolean;
  children?:memberBossObj[];
}

interface toolPanelObj {}
interface NestableListItemContainer {}
interface addonListObj {}
interface addonList {}

@Component({
  selector: 'app-memberboss-addons',
  templateUrl: './memberboss-addons.component.html',
  styleUrls: ['./memberboss-addons.component.scss']
})

export class MemberbossAddonsComponent implements OnInit {
  toolPanel: toolPanelObj[] = [];
  nestableList: memberBossObj[];
  nestableListContainer: NestableListItemContainer[] = [];
  // addonListObj: addonListObj[];
  addonListObj = {};
  addonList: addonList[] = [];

  constructor(private apiSrvc: ApiSrvc) { }

  ngOnInit() {
    this.getPanelList();
    this.getAddonList();

  }

  getPanelList():  void {
      this.apiSrvc.getMemberbossPanelList()
      .subscribe(nestableList => this.nestableList = nestableList['addonPanelList']);
  }
  getAddonList():  void {
      this.apiSrvc.getMemberbossAddonList()
      .subscribe(addonListObj => {
        console.log(addonListObj);
        this.addonListObj = addonListObj;
        // test - wipes existing array because it's just for testing
        // addonListObj.addonList = [];
        if(addonListObj) {
          this.addonList = addonListObj.addonList;
        }

      });
  }

  public lastDropEvent:DndDropEvent | null = null;
  private currentDraggableEvent:DragEvent;
  private currentDragEffectMsg:string;

  onDragStart( event:DragEvent ) {
    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;
  }

  onDragged( item:any, list:any[], effect:DropEffect ) {
    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;
    if( effect === "move" ) {
      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }

  onDragEnd( event:DragEvent) {
    this.currentDraggableEvent = event;
  }

  onDrop( event:DndDropEvent, list?:any[] ) {
    console.log(event);
    console.log(list);
     this.lastDropEvent = event;
     this.addonListObj.addonList = list;
     this.nestableListContainer = list;

    if( list
      && (event.dropEffect === "copy"
        || event.dropEffect === "move") ) {


        // new
          var item = event.data;
          item.handle = true;

          // if(item.columns.length > 1) {
          if(item.columns) {
            item.columns.forEach(obj => {
              console.log(obj);
              obj.addonList = [];
            })
          }

          //end new

        let index = event.index;

        if( typeof index === "undefined" ) {
          index = list.length;
        }

        list.splice( index, 0, event.data );

        console.log(this.addonListObj);
        this.apiSrvc.setMemberbossAddonList(this.addonListObj).subscribe(addonListObj => {
          console.log(addonListObj);

          if(addonListObj.errorList.length > 0) {
            alert(addonListObj.errorList[0]);
          }
          else {
            this.addonListObj = addonListObj;
            this.addonList = addonListObj.addonList;
          }

        });

    }

  }

}
