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
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> ceeca55901bf8afe80b13be166b0c73be0dded39
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes




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
    HttpClientModule,
    HttpClient
    
  ],
  providers: [Data1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
