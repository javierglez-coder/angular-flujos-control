import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe],
  styleUrl: './app.scss'
})
export class App {
nombre = signal('Angular');
fechaActual = signal(new Date());
precio = signal(2500);
  
}
