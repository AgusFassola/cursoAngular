import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone:true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
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
