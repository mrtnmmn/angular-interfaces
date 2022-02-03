import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.scss']
})
export class Ejemplo5Component implements OnInit {
  public nombre: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
