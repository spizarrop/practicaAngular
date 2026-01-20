import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  nombrePadre: string = "Padre";
  fecha: Date = new Date();

  // Mensaje que recibimos del hijo
  mensaje: string = '';

  recibirMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }

  valorContador: number = 0;
  incrementar() {
    this.valorContador++;
  }
  decrementar() {
    this.valorContador--;
  }

}
