import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.scss']
})
export class Ejercicio2Component implements OnInit {

  constructor() { }

  number: string = ""
  numbers: number[] = []

  ngOnInit(): void {
  }

  addToList() {
    this.numbers.push(parseInt(this.number))
    this.number = ""
  }

}
