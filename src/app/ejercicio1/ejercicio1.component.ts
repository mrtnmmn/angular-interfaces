import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.scss']
})
export class Ejercicio1Component implements OnInit {

  nombres: String[] = ['pepe', 'angel', 'bea', 'isa']
  nombre: String =  "";

  constructor() { }

  ngOnInit(): void {
  }

  esProfesor(){
    if (this.nombres.includes(this.nombre.trim().toLowerCase())) {
      return true
    } else {
      return false 
    }
  }

}
