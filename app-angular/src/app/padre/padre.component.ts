import { Component } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone:true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
/* recibirSuma($event: Event) {
throw new Error('Method not implemented.');
} */
  resultado: number = 0;
  recibirSuma(suma: number) {
    this.resultado = suma;
  }
  
  /* mostrarMensaje(){
   this.mensaje ='Click en boton';
  }
  eliminarMensaje(){
  return this.mensaje = '';
} */

}
