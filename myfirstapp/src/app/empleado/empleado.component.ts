import { ThisReceiver } from '@angular/compiler';
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
  empresa = "Googlay";

  //property binding
  disableInputTextProperty = false;
  colorNombreProperty = "color: blue;"
  registradoProperty = false;

  textoRegistro = "No hay registros";

  /*
  getEdad() {
    return this.edad;
  }
  */
  printEmpresa(value: String) {

  }

  setColorNameToGreen(){
    this.colorNombreProperty = "color:green;"
  }

  setRegistrado(event:Event){
    //alert(event.target);
    if((<HTMLInputElement>event.target).value == "si"){
       this.textoRegistro = "Hay 1 nuevo registro";
    }else{
      this.textoRegistro = "No hay registros";
    }  
  }

  constructor() { }


  ngOnInit(): void {
  }



}
