import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Class1Component } from './class1/class1.component';
import { Class2Component } from './class2/class2.component';
import { Data1Service } from './data1.service';
import { CapitalLetterPipe } from './capital-letter.pipe';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    Class1Component,
    Class2Component,
    CapitalLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [Data1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
