import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-replicador',
  imports: [FormsModule],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  texto ='';
  actualizarTexto(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.texto = input.value;
  }
  saludo='Saludo inicial';

}
