import { Component, effect, signal } from '@angular/core';
import { UserProfile } from './shared/components/user-profile/user-profile';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  imports: [UserProfile,Header,Footer],
  styleUrls: ['./app.scss'],  
})
export class App {




}
