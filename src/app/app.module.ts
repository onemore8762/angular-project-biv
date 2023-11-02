import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from "./header/header.component";
import {MatTabsModule} from "@angular/material/tabs";
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import {employeesReducer, metaReducerLocalStorage} from "./store/employees.reducer";
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeCardComponent,
    EmployeesListComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forRoot({employeesEntries: employeesReducer}, {metaReducers: [metaReducerLocalStorage]}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
