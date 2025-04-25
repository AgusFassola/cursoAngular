import { Component } from '@angular/core';
import { Egreso } from './egreso.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-egresos-pres',
  imports: [FormsModule,CommonModule],
  templateUrl: './egresos-pres.component.html',
  styleUrl: './egresos-pres.component.css'
})
export class EgresosPresComponent {
egresos:Egreso[]=[
    new Egreso('Renta Depto', 900),
    new Egreso('Ropa', 200)
  ];
  descripcion:string='';
  precio:number=0;
  porcentaje:number=0;

  suma:number=0;

  sumaEgresos(){
    for (let i = 0; i < this.egresos.length; i++) {
      this.suma+=this.egresos[i].precio;
    }
    console.log(this.suma);
  }
    agregarEgreso(){
      this.egresos.push(new Egreso(this.descripcion, this.precio))
      console.log("egresos:",this.egresos)
    }
}
