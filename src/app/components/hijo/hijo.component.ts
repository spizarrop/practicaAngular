import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  // Recibe dato desde el padre
  @Input() nombre!: string;

  // Envia este mensaje al padre
  @Output() mensajeEnviado = new EventEmitter<string> ();

  // Variable vinculada al input
  mensajeHijo: string = '';

  enviarMensaje() {
    this.mensajeEnviado.emit(this.mensajeHijo);
  }

  // Activamos contador desde el Hijo (la lógica la maneja el padre)
  @Output() incrementarDesdeHijo = new EventEmitter<void> ();
  @Output() decrementarDesdeHijo = new EventEmitter<void> ();

  incrementar() {
    this.incrementarDesdeHijo.emit();
  }
  decrementar() {
    this.decrementarDesdeHijo.emit();
  }
}
