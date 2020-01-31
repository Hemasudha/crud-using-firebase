import { Employee } from "./../employees";
import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "../employees.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    // name: "",
    // age: "",
    // salary: "",
    // city: ""
  };
  showDiv: boolean = true;
  createForm: FormGroup;
  constructor(
    private employeesService: EmployeesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl(""),
      age: new FormControl(""),
      salary: new FormControl(""),
      city: new FormControl("")
    });
  }
  submit() {
    console.log(this.createForm.value);
    if (
      this.employee.name !== "" &&
      this.employee.age !== "" &&
      this.employee.salary !== "" &&
      this.employee.city !== ""
    ) {
      this.employeesService.createUser(this.createForm.value);
    }
    this.router.navigate(["/employees"]);
    // this.employee.name = "";
    // this.employee.age = "";
    // this.employee.salary = "";
    // this.employee.city = "";
  }
}
