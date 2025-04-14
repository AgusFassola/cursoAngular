import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  standalone:true,
  imports: [],
  template: `
    <h1>{{tituloComponenteInLine}}</h1>
    <p>componente-en-linea works!</p>
  `,
  styles: `
    h1{
      color:red;
    }
    p{
      font-size:20px;
    }
  `
})
export class ComponenteEnLineaComponent {
  tituloComponenteInLine='titulo en linea';
}
