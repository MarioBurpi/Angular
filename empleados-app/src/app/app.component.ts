import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[] = [
    new Empleado("Amanda", "Lorian", "Presidente", 75000),
    new Empleado("Benito", "Camela", "Dtor. Financiero", 40000),
    new Empleado("Helena", "Nito", "Dtora. RRHH", 40000),
  ];

  inputNombre:string="";
  inputApellido:string="";
  inputCargo:string="";
  inputSalario:number=0;

  registrarEmpleado():void{
    let miEmpleado = new Empleado(this.inputNombre, this.inputApellido, this.inputCargo, this.inputSalario);
    this.empleados.push(miEmpleado);
  }
}
