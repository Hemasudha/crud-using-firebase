import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "../../shared/models/employees";
import { EmployeesService } from "../../services/employees.service";
import { ToastrManager } from "ng6-toastr-notifications";
@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"]
})
export class UpdateEmployeeComponent implements OnInit {
  employees: Employee[];
  editEmp: boolean = false;
  empEdit: Employee;

  constructor(
    private employeesService: EmployeesService,
    public toastr: ToastrManager
  ) {}
  @Input() employee;
  @Output() closePane = new EventEmitter();

  ngOnInit() {
    console.log(this.employee);
  }
  updateEmployee(event, employee) {
    this.editEmp = true;
    this.empEdit = employee;
    this.employeesService.updateEmployee(employee);
    this.toastr.successToastr("Updated Successfully.", "Success!");
  }
  clear() {
    this.closePane.emit(this.employee);
    this.employee.canEditCode = false;
  }
}
