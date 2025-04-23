import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './lista-productos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] =[ 
    new Producto('Pega 500g', 18000),
    new Producto('Pega 250g', 9900),
    new Producto('QuitaPega 120ml', 2500)
   ];

  agregarProducto(Descripcion:string, Precio:number):void{
    if(Precio && Descripcion){
      this.productos.push(new Producto(Descripcion, Precio));
      
    }
  }

  obtenerProductos(){
    return this.productos;
  }
}
