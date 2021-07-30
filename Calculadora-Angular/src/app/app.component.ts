import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Atributos de clase
  title = 'Calculadora con Angular';
  num1:number = 0;
  num2:number = 0;
  result:number = 0;
  
  //Metodos
  sumar():void{
    this.result = this.num1 + this.num2;
  }
  restar():void{
    this.result = this.num1 - this.num2;
  }

}
