import { Component, signal } from '@angular/core';
import { UserProfile } from './shared/components/user-profile/user-profile';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [UserProfile, Header, Footer],
  styleUrls: ['./app.scss'],
})
export class App {
  usuario = signal<Usuario>({
    id: 1,
    nombre: 'Jimmy Javier',
    email: 'jimmy@example.com',
    edad: 30,
  });
  usuario2 = signal<Usuario>({
    id: 2,
    nombre: 'Javier',
    email: 'javier@example.com',
    edad: undefined,
  });

  constructor() {
    setTimeout(() => {
      this.usuario.set({ id: 1, nombre: 'Jimmy J.', email: 'jimmyj@example.com', edad: 31 });
    }, 3000);
  }
}
