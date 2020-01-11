import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee/employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  logout() {
    this.employeeService.logoutEmployee().subscribe(res => {
      this.router.navigate(["/login"]);
      console.log(res);
    });
  }
  isLoggedIn() {
    if (localStorage.getItem("userToken") != null) return false;
    return true;
  }
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit() {}
}
