import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  cons = [{ name: "aman" }];
  public params: HttpParams = new HttpParams();
  private employeesUrl = "http://localhost:8000/persons/api/employees/";

  getEmployees(): Observable<any[]> {
    let httpHeader = new HttpHeaders({
      Authorization: "Token " + localStorage.getItem("userToken")
    });
    return this.http.get<any[]>(this.employeesUrl, {
      params: this.params,
      headers: httpHeader
    });
  }

  loginEmployee(username, password): Observable<any> {
    let data = { username: username, password: password };
    return this.http.post<any>(
      "http://localhost:8000/persons/api/auth/login/",
      data
    );
  }

  logoutEmployee(): Observable<any> {
    let httpHeader = new HttpHeaders({
      Authorization: "Token " + localStorage.getItem("userToken")
    });
    let x = this.http.post<any>(
      "http://localhost:8000/persons/api/auth/logout/",
      {},
      { headers: httpHeader }
    );
    localStorage.removeItem("userToken");
    return x;
  }

  constructor(private http: HttpClient) {}
}
