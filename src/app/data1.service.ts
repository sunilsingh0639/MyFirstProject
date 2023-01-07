import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Data1Service {

 // dataEmitter = new EventEmitter<string>();

 dataEmitter = new Subject<any>();

  raiseDataEmitterEvent(data: any){

    this.dataEmitter.next(data);


  }

 count = new Subject<number>()
constructor (private http: HttpClient) {}


  getUserList(){

    let apiurl = "http://jsonplaceholder.typicode.com/users";

    return this.http.get(apiurl);
  }

  updateCount(val:number){

    this.count.next(val)
  }

  saveUsers(Data:any){

    

    return this.http.post('http://103.224.246.103:3004/login',Data);


  }


}
