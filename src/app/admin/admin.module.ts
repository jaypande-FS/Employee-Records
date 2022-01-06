import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { MatSortModule} from '@angular/material/sort'
import {MatTableModule} from '@angular/material/table'
import {Ng2SearchPipeModule} from 'ng2-search-filter'   
import {Ng2OrderModule} from 'ng2-order-pipe'
import {NgxPaginationModule} from 'ngx-pagination'
import { SearchPipe } from './search.pipe';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateDesigComponent } from './create-desig/create-desig.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';

import { CreateCertificateComponent } from './create-certificate/create-certificate.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    CreateEmpComponent,
    UpdateEmpComponent,
    ListEmpComponent,
    DetailsComponent,
    SearchPipe,
    ErrorPageComponent,
    CreateDesigComponent,
    SearchEmpComponent,
   
    CreateCertificateComponent

  ],
  imports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    MatTableModule,
    NgxPaginationModule
    
    

  ]
})
export class AdminModule { }
