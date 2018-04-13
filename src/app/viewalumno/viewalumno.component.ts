import { Component, OnInit } from '@angular/core';
import {Alumno} from '../models/alumno.model' 

@Component({
  selector: 'app-viewalumno',
  templateUrl: './viewalumno.component.html',
  styleUrls: ['./viewalumno.component.css']
})
export class ViewalumnoComponent implements OnInit {
  hola = "Hola mundo desde view";
  alumno1 = new Alumno(15141522, 'Baldemar', 10, 'Cursando');

  constructor() { }

  ngOnInit() {
  }

}
