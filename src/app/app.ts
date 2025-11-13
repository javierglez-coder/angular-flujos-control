import { Component, effect, signal } from '@angular/core';
import { UserProfile } from './shared/components/user-profile/user-profile';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  imports: [UserProfile],
  styleUrls: ['./app.scss'],  
})
export class App {




}
