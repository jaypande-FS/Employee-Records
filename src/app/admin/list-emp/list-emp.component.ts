import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';





@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {



  //List object of employe.model.ts (employee class)
  empList!:Employee[];
  emp:Employee=new Employee(); 

 
  name:any;
  searchTerm!:any;
  key!:string 
  reverse:boolean=true;
  p:number =1;
  currentPage:number=0;
  itemsPerPage:number=4;
  totalItems!:number;
  totalPages!:number;
  cpage:number=0;



  

  constructor(private employeeService: EmployeeService,
    private router:Router,
    private route:ActivatedRoute,
    
    ) { }


    //sortNameFn = (a: Employee, b: Employee): number => a.name - b.name;
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


PageChange(event:any){

  this.cpage=event-1; 
  this.currentPage=event; 
  
  this.reloaddata()
  
}


expandSet = new Set<number>();
onExpandChange(id: number, checked: boolean): void {
  if (checked) {
    this.expandSet.add(id);
    console.log(this.expandSet)
    
  } else {
    this.expandSet.delete(id);
    console.log(this.expandSet)
  }
}

sortidFn = (a: Employee, b: Employee): number => a.id - b.id;

sortnameFn = (a: Employee, b: Employee) => a.name.localeCompare(b.name);

sortDirectionfn =  ['ascend', 'descend']
}

