import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { MensajeService } from './mensaje.service';
import { ListadoUsuariosComponent } from "./listado-usuarios/listado-usuarios.component";
import { ListaProductosComponent } from "./lista-productos/lista-productos.component";
import { EjemploPipesComponent } from "./ejemplo-pipes/ejemplo-pipes.component";
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import { CabeceraPresComponent } from "./cabecera-pres/cabecera-pres.component";
import { FormularioPresComponent } from "./formulario-pres/formulario-pres.component";
import { IngresosPresComponent } from "./ingresos-pres/ingresos-pres.component";
import { EgresosPresComponent } from "./egresos-pres/egresos-pres.component";

//Regitramos los datos de localoizacion para español
registerLocaleData(localEs, 'es');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteEnLineaComponent, InterpolacionComponent, PadreComponent, ReplicadorComponent, CalculadoraComponent, ListadoUsuariosComponent, ListaProductosComponent, EjemploPipesComponent, CabeceraPresComponent, FormularioPresComponent, IngresosPresComponent, EgresosPresComponent],
  providers:[ {provide: LOCALE_ID, useValue:'es'} ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda Online';

  mensaje: string;

  //inyeccion de dependencia
  constructor(mensajeService: MensajeService){
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
