import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  
  D_url=' http://localhost:8080/designation'

  constructor(private http:HttpClient) { }

  getAllDesig():Observable<any>{
    return this.http.get(`${this.D_url}/`);
  }
  createDesig(data:any):Observable<any>{
    return this.http.post(`${this.D_url}/`, data , { responseType: 'text' });
  }
  getDesigName(Id:any):Observable<any>{
  
    return this.http.get(`${this.D_url}/${Id}`);
  }
  DeleteDesig(Id:number):Observable<any>{
    return this.http.delete(`${this.D_url}/${Id}`, { responseType: 'text' });
  }

}
