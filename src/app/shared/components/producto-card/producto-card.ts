import { Component, input, output } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.scss'
})
export class ProductoCard {
  producto = input<Producto>();
  onEliminar = output<number>();

  eliminar(id: number|undefined) {
    if (id)
      this.onEliminar.emit(id);
  }
}
