import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  imports: [],
  styleUrl: './app.scss'
})
export class App {
contador = signal(0);

constructor(){
  //El effect se ejecuta automáticamente cuando contador cambia
  effect(() => {
    console.log(`El contador ha cambiado: ${this.contador()}`);
  });
}

incrementar(){
  this.contador.update( valor => valor + 1 );
}
  
}
