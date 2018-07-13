import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{department}from '../models/department.model'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  gender='female';
  isActive='true';
 departments:department[]=[
   {id:1,name:'hr'},
   {id:2,name:'IT'},
   {id:3,name:'legal'},
   {id:4,name:'Accounts'}
 ];

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empdata:NgForm) : void{
console.log(empdata.value );
  }

}
