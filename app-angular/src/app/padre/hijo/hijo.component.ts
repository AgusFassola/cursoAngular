import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone:true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output() notificarPadre = new EventEmitter<string>();

  //se emite una cadena
  enviarMensaje() {
    this.notificarPadre.emit('Mensaje desde el hijo al padre');
  }
  private titulo = 'Titulo de hijo';
  producto={
    nombre:'Nuevo Producto',
    precio: 100
  }

  //Getter de typescript
  get mostrarTitulo(){
    return this.titulo;
  }
}
