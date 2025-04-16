import { Component } from '@angular/core';
import { Producto } from './producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  imports: [FormsModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  Precio:number | null = null;
  Descripcion:string='';

  productos: Producto[] =[ 
    new Producto('Pega 500g', 18000),
    new Producto('Pega 250g', 9900),
    new Producto('QuitaPega 120ml', 2500)
   ];

  agregarProducto():void{
    if(this.Precio && this.Descripcion){
      this.productos.push(new Producto(this.Descripcion, this.Precio));
      
    }
  }
}
