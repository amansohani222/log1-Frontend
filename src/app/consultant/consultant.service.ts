import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConsultantService {
  public params: HttpParams = new HttpParams();
  cons = [{ name: "aman" }];
  private consultantsUrl = "http://localhost:8000/persons/api/consultants/";
  getConsultants(): Observable<any[]> {
    console.log("AMAN");
    return this.http.get<any[]>(this.consultantsUrl, {
      params: this.params
    });
  }
  getConsultantById(id): Observable<any[]> {
    return this.http.get<any[]>(this.consultantsUrl + id + "/");
  }

  constructor(private http: HttpClient) {}
}
