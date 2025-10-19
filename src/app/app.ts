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
  listaItems=['Item A', 'Item B', 'Item C', 'Item D', 'Item E', 'Item F', 'Item G', 'Item H', 'Item I', 'Item J'];
  mostrar:boolean=true;
  nivelUsuario='admin';
  listaNivelesUsuario=['admin','editor','invitado','moderador'];

  toggleMostrar() {
    this.mostrar = !this.mostrar;
  }

  cambiarNivelUsuario(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    console.log(selectElement.value);
    this.nivelUsuario = selectElement.value;
  }
  
}
