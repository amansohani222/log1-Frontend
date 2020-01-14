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
  page = 0;
  offset = 2;

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
      "page",
      String(this.page)
    );
    this.employeeService.params = this.employeeService.params.append(
      "offset",
      String(this.offset)
    );
    this.employeeService.getEmployees().subscribe(employees => {
      console.log(employees, "Asssssssssss");
      this.employees = employees;
    });
  }
  show() {
    console.log("SHOW");
  }
  increasePage(count) {
    if (this.page == 0 && count == -1) {
      return;
    }
    this.page = Number(this.page) + count;
    this.getEmployees();
  }
  ngOnInit() {
    this.getEmployees();
  }
}
