import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { DndDragImageOffsetFunction } from "ngx-drag-drop";
import { ApiSrvc } from '../api-srvc.service';
import { JsonDatePipe } from '../json-date.pipe';
import { SafeHTMLPipe } from '../safe-html.pipe';

interface DragDropObj {
  name:string;
  disable?:boolean;
  handle?:boolean;
  image:string;
  html:string;
  isStructural?:boolean;
  children?:DragDropObj[];
}

interface toolPanelObj {}

interface NestableListItemContainer {}

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})

export class DragDropComponent implements OnInit {
  toolPanel: toolPanelObj[] = [];
  nestableList: DragDropObj[];
  nestableListContainer:NestableListItemContainer[] = [];


  constructor(private apiSrvc: ApiSrvc) { }

  ngOnInit() {
    this.showDragDrop();
  }

  showDragDrop():  void {
    // this.apiSrvc.getDragNDrop()
      this.apiSrvc.getPanelList()
      .subscribe(nestableList => this.nestableList = nestableList['data']);
  }

  public lastDropEvent:DndDropEvent | null = null;
  private currentDraggableEvent:DragEvent;
  private currentDragEffectMsg:string;

  testFunction( event:DndDropEvent, list?:any[] ) {
    console.log("Test started", JSON.stringify(event, null, 2));
  }

  onDragStart( event:DragEvent ) {
    // console.log("drag started", JSON.stringify(event, null, 2));
    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;
  }

  onDragged( item:any, list:any[], effect:DropEffect ) {
    // console.log("dragged", JSON.stringify(event, null, 2));
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
    if( list
      && (event.dropEffect === "copy"
        || event.dropEffect === "move") ) {

      let index = event.index;

      if( typeof index === "undefined" ) {

        index = list.length;
      }
      console.log(list);
      list.splice( index, 0, event.data );
    }

    // if(list.length > 0) {
    //   console.log(list.length);
    //   console.log(list[0]);
    //   console.log(list[0].html);
    // }

  }

  // End drag n drop

}
