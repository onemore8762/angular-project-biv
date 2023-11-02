import {createAction, props} from "@ngrx/store";
import {IEmployee} from "../models/employees.model";

export const addEmployee = createAction('Add employee', props<IEmployee>())
export const removeEmployee = createAction('Remove employee', props<IEmployee>())
