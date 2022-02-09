import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-padre',
  templateUrl: './ejemplo13-padre.component.html',
  styleUrls: ['./ejemplo13-padre.component.scss']
})
export class Ejemplo13PadreComponent implements OnInit {
  edadHijo=0
  constructor() { }

  hijoCambiaSuEdad(edad: number){
    this.edadHijo= edad
  }
  ngOnInit(): void {
  }

}
