import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './ejemplo8/ejemplo8.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejemplo9Component } from './ejemplo9/ejemplo9.component';
import { Ejemplo10Component } from './ejemplo10/ejemplo10.component';
import { MayusculasParesPipe } from './mayusculas-pares.pipe';
import { Ejemplo11Component } from './ejemplo11/ejemplo11.component';
import { Ejemplo12PadreComponent } from './ejemplo12-padre/ejemplo12-padre.component';
import { Ejemplo12HijoComponent } from './ejemplo12-hijo/ejemplo12-hijo.component';
import { Ejemplo13PadreComponent } from './ejemplo13-padre/ejemplo13-padre.component';
import { Ejemplo13HijoComponent } from './ejemplo13-hijo/ejemplo13-hijo.component';
import { Ejemplo14Component } from './ejemplo14/ejemplo14.component';
import { Ejemplo15Component } from './ejemplo15/ejemplo15.component';
import { Ejemplo16Component } from './ejemplo16/ejemplo16.component';
import { EjClass01Component } from './ej-class01/ej-class01.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
    Ejemplo6Component,
    Ejemplo7Component,
    Ejemplo8Component,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejemplo9Component,
    Ejemplo10Component,
    MayusculasParesPipe,
    Ejemplo11Component,
    Ejemplo12PadreComponent,
    Ejemplo12HijoComponent,
    Ejemplo13PadreComponent,
    Ejemplo13HijoComponent,
    Ejemplo14Component,
    Ejemplo15Component,
    Ejemplo16Component,
    EjClass01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
