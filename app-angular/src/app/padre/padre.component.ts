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
  mensaje: string ='';
  recibirMensaje(mensajeHijo: string) {
    this.mensaje = mensajeHijo;
  }
  
  mostrarMensaje(){
   this.mensaje ='Click en boton';
  }
  eliminarMensaje(){
  return this.mensaje = '';
}

}
