import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewalumnoComponent } from './viewalumno/viewalumno.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewalumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    ViewalumnoComponent,
    AppComponent
  ]
})
export class AppModule { }
