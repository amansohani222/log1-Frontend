import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConsultantService {
  cons = [{ name: "aman" }];
  private consultantsUrl = "http://localhost:8000/persons/api/consultants/";
  getConsultants(): Observable<any[]> {
    console.log("AMAN");
    let x = this.http.get<any[]>(this.consultantsUrl);
    console.log(x);
    return x;
  }
  constructor(private http: HttpClient) {}
}
