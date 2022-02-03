import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo7',
  templateUrl: './ejemplo7.component.html',
  styleUrls: ['./ejemplo7.component.scss']
})
export class Ejemplo7Component implements OnInit {
  colorTexto = 'orange'
  constructor() { }
  getColor(){
    return 'blue'
  }
  hasErrors(){
    return true;
  }
  ngOnInit(): void {
  }

}
