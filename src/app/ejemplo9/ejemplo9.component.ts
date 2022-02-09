import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo9',
  templateUrl: './ejemplo9.component.html',
  styleUrls: ['./ejemplo9.component.scss']
})
export class Ejemplo9Component implements OnInit {
  nombre: string = ''
  email: string = ''
  constructor() { }

  onSubmit(){
    alert('Formulario enviado:'+this.nombre+','+this.email)
  }

  ngOnInit(): void {
  }

}
