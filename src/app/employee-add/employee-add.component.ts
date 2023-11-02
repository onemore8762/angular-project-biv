import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {addEmployee} from "../store/employees.actions";

interface IEmployeeForm {
    name: FormControl<string>
    surname: FormControl<string>
    patronymic: FormControl<string>
}

@Component({
    selector: 'app-employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent {
    userForm = new FormGroup<IEmployeeForm>({
        name: new FormControl('', {nonNullable: true}),
        surname: new FormControl('', {nonNullable: true}),
        patronymic: new FormControl('', {nonNullable: true}),
    })

    constructor(private store: Store, private _snackBar: MatSnackBar) {
    }

    onSubmit() {
        this.store.dispatch(addEmployee({...this.userForm.value, id: Math.random() * 10}))
        this.userForm.reset()
        this._snackBar.open(
            'Сотрудник успешно добавлен',
            'X',
            {duration: 2000, horizontalPosition: "start"});
    }

}
