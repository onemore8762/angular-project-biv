import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IEmployee} from "../models/employees.model";

export const selectEmployees = createSelector(
  createFeatureSelector('employeesEntries'),
  (state: IEmployee[]) => state
);
