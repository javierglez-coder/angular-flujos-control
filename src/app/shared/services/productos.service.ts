import { computed, Injectable, signal } from '@angular/core';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
   #productos = signal<Producto[]>([
    { id: 1, nombre: 'Laptop', precio: 1500, estaInventario: true },
    { id: 2, nombre: 'Mouse', precio: 25, estaInventario: true },
    { id: 3, nombre: 'Teclado', precio: 45, estaInventario: false },
    { id: 4, nombre: 'Monitor', precio: 300, estaInventario: true },
    { id: 5, nombre: 'Impresora', precio: 200, estaInventario: false },
  ]);

  productos = this.#productos.asReadonly();

  totalProductos = computed(() => this.#productos().length);

  eliminar(id: number) {
    this.#productos.update(productos => productos.filter(producto => producto.id !== id));
  }
  


}
