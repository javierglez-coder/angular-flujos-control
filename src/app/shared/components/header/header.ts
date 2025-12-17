import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
productosService = inject(ProductosService);
totalProductos = this.productosService.totalProductos;
}
