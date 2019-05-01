import { NgModule } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { DemoListComponent }      from './demo-list/demo-list.component';
import { ComplexObjectComponent }     from './complex-object/complex-object.component';
import { DashboardComponent }     from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'demoList', component: DemoListComponent },
  { path: 'complexObject', component: ComplexObjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
