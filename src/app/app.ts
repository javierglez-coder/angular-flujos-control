import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-flujos-control');   
  listaItems=['Item A', 'Item B', 'Item C', 'Item D', 'Item E', 'Item F', 'Item G', 'Item H', 'Item I', 'Item J'];
  


  
}
