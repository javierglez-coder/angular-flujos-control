import { Component, signal } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { ProductoCard } from './shared/components/producto-card/producto-card';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, Footer, ProductoCard],
  styleUrls: ['./app.scss'],
})
export class App {

  productos = signal<Producto[]>([
    { id: 1, nombre: 'Laptop', precio: 1500, estaInventario: true },
    { id: 2, nombre: 'Mouse', precio: 25, estaInventario: true },
    { id: 3, nombre: 'Teclado', precio: 45, estaInventario: false },
    { id: 4, nombre: 'Monitor', precio: 300, estaInventario: true },
    { id: 5, nombre: 'Impresora', precio: 200, estaInventario: false },
  ]);

  eliminar(id: number) {
    this.productos.update(productos => productos.filter(producto => producto.id !== id));

  }

  constructor() {

  }
}
