import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss']
})
export class Ejemplo1Component implements OnInit {

  public nombre = "Angel"

  constructor() { 
   // this.nombre = "Angel"
  }

  ngOnInit(): void {
  }

}
