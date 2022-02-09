import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo12-hijo',
  templateUrl: './ejemplo12-hijo.component.html',
  styleUrls: ['./ejemplo12-hijo.component.scss']
})
export class Ejemplo12HijoComponent implements OnInit {
  @Input() colorPadre = 'red'
  constructor() { }

  ngOnInit(): void {
  }

}
