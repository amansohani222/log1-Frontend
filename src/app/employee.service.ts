import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  cons = [{ name: "aman" }];
  public param;
  private employeesUrl = "http://localhost:8000/persons/api/employees?name=";
  getEmployees(): Observable<any[]> {
    console.log("AMAN");
    let x = this.http.get<any[]>(this.employeesUrl + this.param);
    console.log(x);
    return x;
  }
  constructor(private http: HttpClient) {}
}
