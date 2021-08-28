import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  textoPadre: string = "";
  textoPadreRecibido: string ="<no name set>";
  textoPadreRecibidoAEnviar: string = "<no name set>";

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: any) {
    this.textoPadre= event.target.value;
  }

  recibirMensaje(mensajeRecibido: string){
    this.textoPadreRecibido = mensajeRecibido;
  }

  enviarMensaje(mensajeRecibido: string){
    this.textoPadreRecibidoAEnviar = mensajeRecibido;
  }

}
