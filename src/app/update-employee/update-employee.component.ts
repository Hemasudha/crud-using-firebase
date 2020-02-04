import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "../employees";
import { EmployeesService } from "../employees.service";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"]
})
export class UpdateEmployeeComponent implements OnInit {
  employees: Employee[];
  editEmp: boolean = false;
  empEdit: Employee;
  showDiv: boolean = true;
  constructor(private employeesService: EmployeesService) {}
  @Input() employee;
  @Output() closePane = new EventEmitter();

  ngOnInit() {
    console.log(this.employee);
  }
  updateEmployee(event, employee) {
    this.editEmp = true;
    this.empEdit = employee;
    this.employeesService.updateEmployee(employee);
  }
  clear() {
    this.closePane.emit(this.employee);
  }
}
