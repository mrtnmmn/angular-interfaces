import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  templateUrl: './ejemplo8.component.html',
  styleUrls: ['./ejemplo8.component.scss']
})
export class Ejemplo8Component implements OnInit {
  resultado: number = 0
  //num1:number = 0
  //num2:number = 0
  constructor() { }
  sumar(num1:string, num2:string){
    this.resultado = Number(num1)+Number(num2)
  }
  ngOnInit(): void {
  }

}
