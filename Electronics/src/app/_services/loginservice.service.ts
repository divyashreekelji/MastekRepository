import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from 'src/app/Iadmin';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private base_url = "http://localhost:4200/app";
  httpOptions = {
  
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  
  };
    constructor(private httpClient:HttpClient) { }
    getUser():Observable<IAdmin []> {
      return this.httpClient.get<IAdmin[]>(this.base_url+"/admin");
    }
}
