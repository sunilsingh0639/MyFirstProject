import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Class1Component } from './class1/class1.component';

const routes: Routes = [
  {path : "class1" , component : Class1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
