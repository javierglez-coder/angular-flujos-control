import { Component, inject, signal } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { ProductoCard } from './shared/components/producto-card/producto-card';
import { Producto } from './models/producto';
import { ProductosService } from './shared/services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, Footer, ProductoCard],
  styleUrls: ['./app.scss'],
})
export class App {
  productosService = inject(ProductosService);
  productos = this.productosService.productos;
 
  eliminar(id: number) {
    this.productosService.eliminar(id);
  }

}
