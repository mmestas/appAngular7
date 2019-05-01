import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComplexObjectComponent } from './complex-object/complex-object.component';
import { AccordionDirective } from './accordion.directive';
import { JsonDatePipe } from './json-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoListComponent,
    DashboardComponent,
    ComplexObjectComponent,
    AccordionDirective,
    JsonDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
