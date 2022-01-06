import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Certificate } from 'src/app/certificate.model';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent implements OnInit {

  cert:Certificate=new Certificate();

  certList!:Observable<Certificate>

  constructor(private createcert:CertificateService,
    private route:Router) { }

  ngOnInit(): void {
    this.getCert();
  }

  getCert(){

    this.certList=this.createcert.getAllCert();

  }

  key:any
  reverse:boolean=false
  sort(key:any){
    this.key=key;
    this.reverse!=this.reverse;
  }

  delete(Id:number){
    this.createcert.DeleteCert(Id).subscribe(data => this.getCert());

  }
  submit(){
    this.createcert.createCert(this.cert).subscribe(data=> {this.getCert(),console.log(data)})
  }


}
