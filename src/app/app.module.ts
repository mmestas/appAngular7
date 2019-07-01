import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComplexObjectComponent } from './complex-object/complex-object.component';
import { AccordionDirective } from './accordion.directive';
import { JsonDatePipe } from './json-date.pipe';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SafeHTMLPipe } from './safe-html.pipe';
import { CarouselComponent } from './carousel/carousel.component';
import { MemberbossAddonsComponent } from './memberboss-addons/memberboss-addons.component';
import { CustomFilterPipe } from './custom-filter.pipe';
import { CustomFilter2Pipe } from './custom-filter2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DemoListComponent,
    DashboardComponent,
    ComplexObjectComponent,
    AccordionDirective,
    JsonDatePipe,
    DragDropComponent,
    SafeHTMLPipe,
    CarouselComponent,
    MemberbossAddonsComponent,
    CustomFilterPipe,
    CustomFilter2Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DndModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
