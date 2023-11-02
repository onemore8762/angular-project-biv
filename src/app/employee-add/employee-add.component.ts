import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {addEmployee} from "../store/employees.actions";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent {
  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    patronymic: new FormControl(''),
  })

  constructor(private store: Store, private _snackBar: MatSnackBar) {}

  onSubmit() {
    if (this.userForm.valid){
      this.store.dispatch(addEmployee(this.userForm.value))
      this.userForm.reset()
      this._snackBar.open(
          'Сотрудник успешно добавлен',
          'X',
          {duration: 2000, horizontalPosition: "start"});
    }
  }
}
