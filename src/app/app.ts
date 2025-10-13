import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-flujos-control'); 
  listaElementos = ['Elemento 1', 'Elemento 2', 'Elemento 3']; 
}
