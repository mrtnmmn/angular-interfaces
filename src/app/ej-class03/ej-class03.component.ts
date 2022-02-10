import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-class03',
  templateUrl: './ej-class03.component.html',
  styleUrls: ['./ej-class03.component.scss']
})
export class EjClass03Component implements OnInit {

  public impares: boolean = false 
  public pares: boolean = false 

  constructor() { }

  ngOnInit(): void {
  }

}
