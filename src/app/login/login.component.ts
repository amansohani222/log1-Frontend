import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee/employee.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  authenticate(username, password) {
    this.employeeService.loginEmployee(username, password).subscribe(
      (data: any) => {
        localStorage.setItem("userToken", data.token);
        this.router.navigate(["/employees"]);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}
}
