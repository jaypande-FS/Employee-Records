
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Certificate } from 'src/app/certificate.model';
import { Designation } from 'src/app/designation.model';
import { Employee } from 'src/app/employee.model';
import { CertificateService } from 'src/app/services/certificate.service';
import { DesignationService } from 'src/app/services/designation.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {


  // Variable to grab ID of a particular Employee
  Id!:number;
  // Object of employee.model.ts(emoloyee class)
  emp: Employee=new Employee();
  designationlist!:Observable<Designation[]>;
  certificateList!:Observable<Certificate[]>;
  cert!:Certificate;
  tempList:Certificate[]=[];

  constructor(private desigService:DesignationService,
    private employeeService:EmployeeService,
    private certificationService:CertificateService,
    private route:ActivatedRoute,
    private router:Router) {
     }

  ngOnInit(): void {
    this.Id=this.route.snapshot.params["id"];
    this.designationlist= this.desigService.getAllDesig();
    this.certificateList=this.certificationService.getAllCert();
    this.getdata();
   
  }

  //Calling Update function from the employee.service(API)
  submit(){
  
    this.emp.certificates=this.tempList;
    console.log(this.emp);


    this.employeeService.updateEmp(this.Id,this.emp).subscribe(data =>{ 
    this.router.navigate(['/']), console.log(data)
  }
  );

  // Calling API to grab data of employee with id=ID
}
getdata(){
  this.employeeService.getById(this.Id).subscribe(data =>{this.emp=data,this.tempList=data.certificates} );
}

onCheck(cert:Certificate,target:any){

  if(target.checked){
    this.tempList.push(cert);
    console.log(this.tempList)

  }
  else{
    let i = this.tempList.findIndex(remvCert => remvCert.id===cert.id); 
     //if we uncheck - cert.id- jo templist mai already thi, x.id jo abhi uncheck hue, if they are equal. then,
    this.tempList.splice(i,1);// then delete index i from templist
    console.log( this.tempList);
  }
}
removeCert(cert:any){
  console.log(cert);
  let i = this.tempList.findIndex(remvCert => remvCert.id===cert.id); 
  this.tempList.splice(i,1);
  console.log( this.tempList);
}
}
