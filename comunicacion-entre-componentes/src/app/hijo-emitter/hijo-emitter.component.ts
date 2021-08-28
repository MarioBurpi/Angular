import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-emitter',
  templateUrl: './hijo-emitter.component.html',
  styleUrls: ['./hijo-emitter.component.css']
})
export class HijoEmitterComponent implements OnInit {

  @Output()
  enviarAPadre:EventEmitter<string> = new EventEmitter<string>();
  @Output()
  enviarAHermano:EventEmitter<string> = new EventEmitter<string>();
  texto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClickEmitPadre() {
    this.enviarAPadre.emit(this.texto);
  }
  onClickEmitHermano() {
    this.enviarAHermano.emit(this.texto);
  }


}
