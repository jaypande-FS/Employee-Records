import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  testUrl:string="http://localhost:8080/employee/filters";

   

  constructor(private http : HttpClient) { }



  searchEmployeesList(page:number,itemsPerPage:number,data:Search): Observable<any> {

   

    // return this.http.get(`${this.baseUrl}/`);

    return this.http.post(`${this.testUrl}?pageNumber=`+page+`&pageSize=`+itemsPerPage,data);

  }
}