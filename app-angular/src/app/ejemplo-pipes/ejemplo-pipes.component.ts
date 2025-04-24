import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  empleados=[
    {nombre: 'Agustin', sueldo: 12000, fechaNac: new Date('1998-11-10')},
    {nombre: 'Lara', sueldo: 15000, fechaNac: new Date('2000-06-05')},
    {nombre: 'Mateo', sueldo: 16000, fechaNac: new Date('2011-09-12')},
  ];
}
