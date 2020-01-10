import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: any[];
  name = "a";

  constructor(private employeeService: EmployeeService) {}

  getEmployees(): void {
    console.log("HELLO");
    console.log(name);
    this.employeeService.param = this.name;
    this.employeeService.getEmployees().subscribe(employees => {
      console.log(employees);
      this.employees = employees;
    });
  }
  show() {
    console.log("SHOW");
  }
  ngOnInit() {}
}
