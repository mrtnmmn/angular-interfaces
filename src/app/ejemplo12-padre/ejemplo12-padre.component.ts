import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo12-padre',
  templateUrl: './ejemplo12-padre.component.html',
  styleUrls: ['./ejemplo12-padre.component.scss']
})
export class Ejemplo12PadreComponent implements OnInit {
  color:string = 'orange'
  constructor() { }

  ngOnInit(): void {
  }

}
