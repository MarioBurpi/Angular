import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  //Atributos de clase
  nombre = "Amanda";
  apellido = "Lorian";
  edad = 36;
  ubicacion = "Barcelona";

  /*
  getEdad() {
    return this.edad;
  }
  */
  printEmpresa(value: String) {

  }
  constructor() { }


  ngOnInit(): void {
  }



}
