import { Component, input } from '@angular/core';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {
usuario = input<Usuario>();
}
