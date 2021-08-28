import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  private _textoHijo: string = "";
  private _textoHermano: string = "";

  @Input()
  set textoHijo(value: string){
    value = value || '<No name set>';
    this._textoHijo = value.toLowerCase();
  }
  get textoHijo(){return this._textoHijo;}

  @Input()
  set textoHermano(value: string){
    value = value || '<No name set>';
    this._textoHermano = value.toLowerCase();
  }
  get textoHermano(){return this._textoHermano;}
}
