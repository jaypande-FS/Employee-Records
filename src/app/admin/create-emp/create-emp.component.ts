import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

  import { Employee } from 'src/app/employee.model';
import { Designation } from 'src/app/designation.model';
import { Observable } from 'rxjs';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  // object of employee.model.ts
  emp : Employee = new Employee();

  designationlist!:Observable<Designation[]>;

  constructor(
    private employeeService: EmployeeService,private giveDesig:DesignationService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDesignation();
  }

  // navigating function- called in API calling
  GotoList(){
    this.router.navigate(['/']);
  }


  // calling API from employee.service and connected using templete form to the form.
  submit(): void {
    this.employeeService.createEmp(this.emp).subscribe(data =>{this.GotoList(),console.log(this.emp)});
  }

  getDesignation(){
    this.designationlist=this.giveDesig.getAllDesig();
  }
}
