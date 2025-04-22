import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  opA: number | null =null;
  opB: number | null =null;
  
  @Output() notificarPadre = new EventEmitter<number>();

  sumarNumeros(){
    if(this.opA && this.opB){
      const suma = this.opA + this.opB;
      this.notificarPadre.emit(suma);
    }else{
      console.log("error en uno de los operadores");
    }
     
  };
  //se emite una cadena
/*   enviarMensaje() {
    this.notificarPadre.emit();
  } */
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
