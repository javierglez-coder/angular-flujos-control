import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
contador = signal(0);
valorDoble = computed( () => this.contador() * 2 );

leerValor(){
  const valor = this.contador();
}

establecerValor(){
  this.contador.set(0);
}

actualizarValor(valorNuevo:number){
  this.contador.update( valorActual => valorActual + valorNuevo );
}
  
}
