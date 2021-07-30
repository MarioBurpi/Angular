import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje="";
  registrado = false;
  nombre:string = "";
  apellido:string = "";
  entradas: any;

  constructor(){
    this.entradas = [
      {titulo:"La importancia del ROM"}, 
      {titulo:"Haz tus push ups más efectivas"}, 
      {titulo:"Progresión: destino front lever"}, 
      {titulo:"Descansos, ¿Cómo calcularlos?"}, 
      {titulo:"Progresión: Muscle Up"},
    ]
  }
  

  registrarUsuario():void{
    this.registrado = true;
    this.mensaje= "Usuario " + this.nombre + " " + this.apellido +  " registrado con éxito.";
  }

}
