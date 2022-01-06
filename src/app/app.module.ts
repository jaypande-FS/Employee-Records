import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatSortModule} from '@angular/material/sort'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import {Ng2OrderModule} from 'ng2-order-pipe'
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    RouterModule,
    MatSortModule,BrowserAnimationsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
