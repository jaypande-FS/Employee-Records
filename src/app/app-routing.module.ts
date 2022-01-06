import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateCertificateComponent } from './admin/create-certificate/create-certificate.component';
import { CreateDesigComponent } from './admin/create-desig/create-desig.component';
import { CreateEmpComponent } from './admin/create-emp/create-emp.component';
import { DetailsComponent } from './admin/details/details.component';
import { ErrorPageComponent } from './admin/error-page/error-page.component';
import { ListEmpComponent } from './admin/list-emp/list-emp.component';
import { SearchEmpComponent } from './admin/search-emp/search-emp.component';
import { UpdateEmpComponent } from './admin/update-emp/update-emp.component';




const routes: Routes = [
  // Creating routes to navigate to various components.
  
  {
    path:'',component: AdminComponent, 
    children:[
      {
        path:'',component: ListEmpComponent
      },
      {
        path:'create',component: CreateEmpComponent
      },
      {
        path:'update/:id',component: UpdateEmpComponent
      },
      {
        path:'detail/:id',component: DetailsComponent
      },
      {
        path:'createdesig',component: CreateDesigComponent
      },
    
      {
        path:'search',component: SearchEmpComponent
      },
    
      {
        path:'createcert',component: CreateCertificateComponent
      },
      {
        path:'**',component: ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
