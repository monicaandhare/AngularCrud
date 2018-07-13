import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import {CreateEmployeeComponent } from './employee/create-employee.component';
import {FormsModule} from '@angular/forms'

const appRoute: Routes =[
  {path:'list', component:ListEmployeesComponent},
  {path:'create',  component:CreateEmployeeComponent},
  {path:'', redirectTo:'/list', pathMatch:'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
