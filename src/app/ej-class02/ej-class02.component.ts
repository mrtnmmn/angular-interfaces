import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-class02',
  templateUrl: './ej-class02.component.html',
  styleUrls: ['./ej-class02.component.scss']
})
export class EjClass02Component implements OnInit {

  public num1: number = 0
  public num2: number = 0

  public res: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    this.res = this.num1 * this.num2 
  }

}
