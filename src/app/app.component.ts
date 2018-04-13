import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola como estas';
  a : string;
  
  constructor(){
    console.log(this.a);
  }
   
}
