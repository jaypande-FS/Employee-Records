import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';

import { Employee } from 'src/app/employee.model';



import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  

  //List object of employe.model.ts (employee class)
  empList!:Observable<Employee[]>;

  name:any;
  searchTerm!:any;
  key!:string 
  reverse:boolean=false;
  p:number =1;
  currentPage:number=0;
  itemsPerPage:number=4;
  totalItems!:number;
  totalPages!:number;
  cpage:number=0;



  constructor(private employeeService: EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    
    this.reloaddata();
  }

  //Function calling Delete API from employee.service and Refersing the list.
  delete(Id:number){
    this.employeeService.DeleteEmp(Id).subscribe(data => {this.reloaddata()});
      
  }

  sort(key:string){
  this.key = key;
  this.reverse=!this.reverse;

}
reloaddata(){
  this.employeeService.getAllEmployee(this.cpage,this.itemsPerPage).subscribe(data=>
    {
      this.empList=data['content'],
      this.itemsPerPage=data['size'],
      this.totalItems=data['totalElements'],
      this.totalPages=data['totalPages']
  
    }
    )
}

//clear nahi hua hai!!
PageChange(event:any){
  console.log(event)
  this.cpage=event-1; 
  this.currentPage=event; 
  this.reloaddata()
  console.warn(this.itemsPerPage)
}
}
