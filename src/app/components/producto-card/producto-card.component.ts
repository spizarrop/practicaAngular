import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent {
  producto = {
    nombre: 'Monitor',
    precio: 200,
    imagen: '../assets/monitor.png'
  };
}