import { Component } from '@angular/core';
import { Ingreso } from './ingreso.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingresos-pres',
  imports: [FormsModule, CommonModule],
  templateUrl: './ingresos-pres.component.html',
  styleUrl: './ingresos-pres.component.css'
})
export class IngresosPresComponent {
  ingresos:Ingreso[]=[
    new Ingreso('Salario', 4000),
    new Ingreso('Venta Coche', 500)
  ];
  descripcion:string='';
  precio:number=0;
  suma:number=0;

  sumaIngresos(){
    for (let i = 0; i < this.ingresos.length; i++) {
      this.suma+=this.ingresos[i].precio;
    }
    console.log(this.suma);
  }

  agregarIngreso(){
    this.ingresos.push(new Ingreso(this.descripcion, this.precio))
    console.log("ingresos:",this.ingresos)
  
  }
}
