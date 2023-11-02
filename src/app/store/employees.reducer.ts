import {ActionReducer, createReducer, INIT, on, UPDATE} from "@ngrx/store";
import {addEmployee, removeEmployee} from "./employees.actions";
import {IEmployee} from "../models/employees.model";


export const initialEmployeesEntries: IEmployee[] = []

export const employeesReducer = createReducer(
    initialEmployeesEntries,

  on(addEmployee, (employees, {type, ...employee}) => {
    const employeesClone = [...employees]
    employeesClone.push(employee)
    return employeesClone
  }),

  on(removeEmployee, (employees,  {type, ...employee}) => {
    const employeesClone: IEmployee[] = [...employees]
    const found = employeesClone.find(entry => entry.id === employee.id)
    if (found){
      employeesClone.splice(employeesClone.indexOf(found), 1)
    }
    return employeesClone
  })
)


export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
};
