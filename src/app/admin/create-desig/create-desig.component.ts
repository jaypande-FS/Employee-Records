import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Designation } from 'src/app/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-create-desig',
  templateUrl: './create-desig.component.html',
  styleUrls: ['./create-desig.component.css']
})
export class CreateDesigComponent implements OnInit {

  desig: Designation =new Designation();

  desigList!:Observable<Designation[]>;

  constructor(private createDesig:DesignationService,
  private router:Router) { }

  ngOnInit(): void {
    this.refesh();
  }

submit(): void {
    this.createDesig.createDesig(this.desig).subscribe(data =>{this.refesh(),console.log(this.desig)});
  }
  
delete(Id:number){
  this.createDesig.DeleteDesig(Id).subscribe(data => {this.refesh()});
    
}
refesh(){
 
  this.desigList = this.createDesig.getAllDesig();
  
 }  
 key!:string 
 reverse:boolean=false;
 sort(key:string){
 this.key = key;
 this.reverse=!this.reverse;

}
}
