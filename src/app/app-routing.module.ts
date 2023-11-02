import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeAddComponent} from "./employee-add/employee-add.component";
import {EmployeesListComponent} from "./employees-list/employees-list.component";

const routes: Routes = [
  { path: '', component: EmployeeAddComponent },
  { path: 'list', component: EmployeesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
