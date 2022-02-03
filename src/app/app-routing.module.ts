import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './ejemplo8/ejemplo8.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component'

const routes: Routes = [
  {path:'ejemplo1', component: Ejemplo1Component},
  {path:'ejemplo2', component: Ejemplo2Component},
  {path:'ejemplo3', component: Ejemplo3Component},
  {path:'ejemplo4', component: Ejemplo4Component},
  {path:'ejemplo5', component: Ejemplo5Component},
  {path:'ejemplo6', component: Ejemplo6Component},
  {path:'ejemplo7', component: Ejemplo7Component},
  {path:'ejemplo8', component: Ejemplo8Component},
  {path:'ejercicio1', component: Ejercicio1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
