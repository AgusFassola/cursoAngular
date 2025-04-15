import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  opA=null;
  opB=null;
  suma=0;
  sumar(){
    return this.suma = Number(this.opA) + Number(this.opB);
  };
}
