import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificate } from 'src/app/certificate.model';

import { Designation } from 'src/app/designation.model';

import { Employee } from 'src/app/employee.model';
import { CertificateService } from 'src/app/services/certificate.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // variable to get Id of an employee

  Id!:number;
  emp:Employee=new Employee(); 
  cert!:Certificate;
  

  
  constructor(private employeeService: EmployeeService,
    private router:Router,
    private route:ActivatedRoute,
    private certService:CertificateService
    ) { }

  ngOnInit(): void {
    this.Id=this.route.snapshot.params["id"];  
    this.getdata();
  }
  // Function to get Data by Id Of an employee
  getdata(){
    this.employeeService.getById(this.Id).subscribe(data =>
      {this.emp=data}
      );
    }
     
}

