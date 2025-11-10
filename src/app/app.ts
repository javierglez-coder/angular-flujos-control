import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  imports: [],
  styleUrl: './app.scss'
})
export class App {
//tema actual
temaActual = signal<'light' | 'dark'>((localStorage.getItem('tema') as 'light' | 'dark') ?? 'light');

constructor(){
  //efecto para actualizar el tema
  effect((()=>{
    const tema = this.temaActual();
    localStorage.setItem('tema', tema);
    console.log('Tema guardado y actualizado en localStorage a:', tema);
  }))
}

cambiarTema(){
  this.temaActual.update(tema => tema === 'light' ? 'dark' : 'light');
}


}
