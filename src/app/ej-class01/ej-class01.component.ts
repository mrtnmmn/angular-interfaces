import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-class01',
  templateUrl: './ej-class01.component.html',
  styleUrls: ['./ej-class01.component.scss']
})
export class EjClass01Component implements OnInit {

  public nombre: string = ""
  public nombres: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  insertIntoList() {
    this.nombres.push(this.nombre)
    this.nombre = ""
  }

}   