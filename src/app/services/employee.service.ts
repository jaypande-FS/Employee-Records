import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// API for backend and Database
export class EmployeeService {

// backend and json server URL with request mapping
  // can also work in JSon server change port to 3000: and by backend :8080
  apiUrl='http://localhost:8080/employee'



  constructor(private http:HttpClient) { }

  getAllEmp():Observable<any>{
    return this.http.get(`${this.apiUrl}/`);
  }
  createEmp(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/`, data , { responseType: 'text' });
  }
  getById(Id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/${Id}`);
  }
  updateEmp(Id:number,data:any):Observable<any>{
   return this.http.put(`${this.apiUrl}/${Id}`,data) ;
  }
  DeleteEmp(Id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${Id}`, { responseType: 'text' });
  }
  getAllEmployee(pageNumber:any,itemsPerPage:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/all?pageNumber=`+pageNumber+`&pageSize=`+itemsPerPage);
  }
  
 

  


  

}
