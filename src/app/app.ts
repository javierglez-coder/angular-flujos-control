import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  imports: [],
  styleUrls: ['./app.scss']
})
export class App {

  textoBuscado='';

  buscar(texto:string){
    this.textoBuscado=texto;
    console.log('Buscando: ', this.textoBuscado);
  }

  limpiar(input: HTMLInputElement){
    this.textoBuscado='';
    input.value='';
    input.focus();
  }


}
