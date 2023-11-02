import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmployee} from "../models/employees.model";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() user: IEmployee
  @Input() index: number
  @Output() removeCard = new EventEmitter<IEmployee>()

  remove(employee: IEmployee): void{
    this.removeCard.emit(employee)
  }
}
