import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Designation } from 'src/app/designation.model';
import { Employee } from 'src/app/employee.model';
import { Search } from 'src/app/search.model';
import { DesignationService } from 'src/app/services/designation.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent implements OnInit {

  Id!:number;
  searchTerm!:any;
  empList:Employee[]=[]
  key!:string 
  reverse:boolean=true;
  p:number =1;
  currentPage:number=0;
  itemsPerPage:number=4;
  totalItems!:number;
  totalPages!:number;
  cpage:number=0;
  designationlist:Designation[]=[];
  emp:Employee=new Employee(); 

  empArray:Employee[]=[]
  keywordName:string="name";
  keyword:string= "address";

  

  search:Search= new Search()

  constructor(private searchemp:SearchService,
    private employeeService:EmployeeService,
    private Router:Router,
    private desigService:DesignationService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
this.desigService.getAllDesig().subscribe(data=>{
  this.designationlist=data
})


  }
  delete(Id:number){
    this.employeeService.DeleteEmp(Id).subscribe(data => {this.reloaddata()});
      
  }
  reloaddata(){
    this.searchemp.searchEmployeesList(this.cpage,this.itemsPerPage,this.search).subscribe(data=>
      {
  
        //data['']- ye kha se pata chala?
      
        this.empList=data['content'],
        this.itemsPerPage=data['size'],
        this.totalItems=data['totalElements'],
        this.totalPages=data['totalPages']
 
  
      })
  }

  PageChange(event:any){
    console.log(event)
    this.cpage=event-1; 
    this.currentPage=event; 
    this.reloaddata()
    console.warn(this.itemsPerPage)
  }

  sort(key:string){
    this.key = key;
    this.reverse=!this.reverse;
  
  }
  callDetail(id:number){
    this.Router.navigate(['/detail/',id])


  }
  callUpdate(id:number){
    this.Router.navigate(['/update/',id])

  }
  Search(){
    console.log (this.search)
    this.reloaddata()
  
  }
  itemPerChange(){
    if(this.empList.length>0){
      this.reloaddata();
    }
  }

  clean(){
    this.empList=[];
    this.search = new Search();
  }

    selectName(data:any) {
      console.log(data)
      this.search.name=data
   
 
    }
    selectAddress(data:any){
      console.log(data)
      this.search.address=data;
    }
   
  
    onChangeSearch(search: string) {
      this.employeeService.getAllEmp().subscribe(data =>{this.empArray=data} ) 
    }
  
    onFocused(e:any) {
   
    }

    expandSet = new Set<number>();
onExpandChange(id: number, checked: boolean): void {
  if (checked) {
    this.expandSet.add(id);
  } else {
    this.expandSet.delete(id);
  }

}
sortidFn = (a: Employee, b: Employee): number => a.id - b.id;

sortnameFn = (a: Employee, b: Employee) => a.name.localeCompare(b.name);

sortDirectionfn =  ['ascend', 'descend']
}
