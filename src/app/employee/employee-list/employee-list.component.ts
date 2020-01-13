import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: any[];
  first_name = "";
  last_name = "";
  skills = "";
  team = "";
  position = "";
  phone = "";
  limit = "0";

  constructor(private employeeService: EmployeeService) {}

  employeeClicked(emp) {
    console.log(emp.username);
  }

  getEmployees(): void {
    console.log("HELLO");
    console.log(name);
    this.employeeService.params = this.employeeService.params.append(
      "first_name",
      this.first_name
    );
    this.employeeService.params = this.employeeService.params.append(
      "last_name",
      this.last_name
    );
    this.employeeService.params = this.employeeService.params.append(
      "skills",
      this.skills
    );
    this.employeeService.params = this.employeeService.params.append(
      "team",
      this.team
    );
    this.employeeService.params = this.employeeService.params.append(
      "position",
      this.position
    );
    this.employeeService.params = this.employeeService.params.append(
      "phone",
      this.phone
    );
    this.employeeService.params = this.employeeService.params.append(
      "limit",
      this.limit
    );
    this.employeeService.getEmployees().subscribe(employees => {
      console.log(employees, "Asssssssssss");
      this.employees = employees;
    });
  }
  show() {
    console.log("SHOW");
  }
  increaseLimit(count) {
    if (this.limit == String(0) && count == -2) {
      return;
    }
    this.limit = String(Number(this.limit) + count);
    this.getEmployees();
  }
  ngOnInit() {
    this.getEmployees();
  }
}
