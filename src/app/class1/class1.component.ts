import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { __values } from 'tslib';
import { Data1Service } from '../data1.service';

@Component({
  selector: 'app-class1',
  templateUrl: './class1.component.html',
  styleUrls: ['./class1.component.scss'],
  
  
  

})
export class Class1Component implements OnInit {

lowercaseName = "Shankar"
named = this.lowercaseName.toLowerCase()

constructor(private Data1Service:Data1Service) {}

ngOnInit(): void {

  this.Data1Service.raiseDataEmitterEvent(this.enteredPass);
  
}


enteredText:any=[];
enteredPass:string='';
data:any=[];

clickon(){
  console.log("sunil rathore dhaderu")
  console.log("sunil rathore dhaderu")
}

OnBtnClick(data:any){

  //console.log(this.enteredText);
  // this.Data1Service.raiseDataEmitterEvent(this.enteredText);
 
  // console.log(this.enteredText)
  // console.log(data)
}

//   today = new Date();

//   a = 1000;

   p = 10;

 decimal = new Date();  

    
getLoginFormData(Data:any){

this.Data1Service.saveUsers(Data)
.subscribe(result=>{

  console.log(result);
})

}



anyArray: any[] = [
  {firstname:"Shankar" , lastname:"Samota" , age: 24 , gender : "Male"},
  {firstname:"Yogendra" , lastname:"Sharma" , age: 21 , gender : "Male"},
  {firstname:"Shakti" , lastname:"Singh" , age: 23 , gender : "Male"},
  {firstname:"Sunil" , lastname:"Rathore" , age: 22 , gender : "Male"},
  {firstname:"Shubham" , lastname:"Chouhan" , age: 26 , gender : "Male"},
  {firstname:"Chahat" , lastname:"Sharma" , age: 23 , gender : "Female"},
  {firstname:"Rohit" , lastname:"Chouhan" , age: 17 , gender : "Male"}]

  

}
