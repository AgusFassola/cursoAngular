import { Component } from '@angular/core';
import { Producto } from './producto.model';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-lista-productos',
  imports: [FormsModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Producto[] =[];
  Precio:number = 0  ;
  Descripcion:string='';

  constructor(private productosService: ProductosService){}
    ngOnInit(){
      this.productos = this.productosService.obtenerProductos();
    }

    agregarProducto(){
      return this.productosService.agregarProducto(this.Descripcion, this.Precio);
    }
}
