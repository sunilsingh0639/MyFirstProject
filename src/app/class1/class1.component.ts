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

constructor(private Data1Service:Data1Service) {}

ngOnInit(): void {

  this.Data1Service.raiseDataEmitterEvent(this.enteredPass);
  
}


enteredText:any=[];
enteredPass:string='';
data:any=[];



OnBtnClick(data:any){

  //console.log(this.enteredText);
  // this.Data1Service.raiseDataEmitterEvent(this.enteredText);
 
  // console.log(this.enteredText)
  // console.log(data)
}

//   today = new Date();

//   a = 1000;

//   p = 10;

// decimal = new Date();  

    
getLoginFormData(Data:any){

this.Data1Service.saveUsers(Data)
.subscribe(result=>{

  console.log(result);
})

}

  

}
