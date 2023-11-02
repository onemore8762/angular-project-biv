import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {IEmployee} from "../models/employees.model";
import {selectEmployees} from "../store/employees.selectors";
import {removeEmployee} from "../store/employees.actions";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  userList$: Observable<IEmployee[]>

  constructor(private store: Store, private _snackBar: MatSnackBar) {
    this.userList$ = store.select(selectEmployees)
  }

  removeEmployee(employee: IEmployee) {
    this.store.dispatch(removeEmployee(employee))
    this._snackBar.open(
      'Сотрудник успешно удален',
      'X',
      {duration: 2000, horizontalPosition: "start"}
    );
  }
}
