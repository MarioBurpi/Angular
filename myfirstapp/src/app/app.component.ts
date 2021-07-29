import { Component } from '@angular/core';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//En esta clase se definen todos los componentes (reutilizables) que se quiere usar en el proyecto
export class AppComponent {
  title = 'myfirstapp';
  helloWorld = "Hello World!"
}
