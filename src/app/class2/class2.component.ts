import { Component,OnInit} from '@angular/core';
import { Data1Service } from '../data1.service';
import { from, timer } from 'rxjs';
import { of ,map,interval } from 'rxjs';
import { observable,catchError } from 'rxjs';
import { delay, } from 'rxjs/operators';
import { forkJoin, throwError,mergeMap,retry } from 'rxjs';

@Component({
  selector: 'app-class2',
  templateUrl: './class2.component.html',
  styleUrls: ['./class2.component.scss']
})
export class Class2Component implements OnInit{

  inputText:string='';
  inputPass:string='';

  nameTouse = "Shankar"

constructor(private Data1Service:Data1Service) { }

  ngOnInit(): void {
    this.Data1Service.dataEmitter.subscribe((value) => {



//this.inputText = value;
//console.log(this.inputText);
//console.log(value);

//timer
    });
   // timer(0, 1000).subscribe(n => console.log('timer', n));

    //map
  //   of(4, 8, 12)
  // .pipe(map((x) => x * x))
  // .subscribe((v) => console.log(`value: ${v}`));
    
///////////////
//     const example = forkJoin({
//       // emit 'Hello' immediately
//       sourceOne: of('Hello'),
//       // emit 'World' after 1 second
//       sourceTwo: of('World').pipe(delay(1000)),
//       // throw error
//       sourceThree: throwError('This will error')
//     }).pipe(catchError(error => of(error)));
    
//     // output: 'This will Error'
//     const subscribe = example.subscribe(val => console.log(val));




 //marge map
//     const letters = of('1');
// const result = letters.pipe(
//   mergeMap(x => interval(1).pipe(map(i => x + i)))
// );

// result.subscribe(x => console.log(x));
    

// const source = interval(1000);
// const example = source.pipe(
//   mergeMap(val => {
//     //throw error for demonstration
//     if (val > 5) {
//       return throwError('Error!');
//     }
//     return of(val);
//   }),
//   //retry 2 times on error
//   retry(2)
// );

// const subscribe = example.subscribe({
//   next: val => console.log(val),
//   error: val => console.log(`${val}: Retried 2 times then quit!`)
// });


//forkjoin

// const observable = forkJoin([
//   of(1, 2, 3, 4),
//   Promise.resolve(8),
//   timer(4000)
// ]);
// observable.subscribe({
//  next: value => console.log(value),
//  complete: () => console.log('This is how it ends!'),
// });

// const array = [10, 20, 30];
// const result = from(array);

// result.subscribe(x => console.log(x));




  }
  


}
