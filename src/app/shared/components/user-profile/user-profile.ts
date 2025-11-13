import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [UpperCasePipe],
  template: `<div>User Profile Component, {{ 'texto' | uppercase }}</div>`,
  styleUrl: './user-profile.scss'
})
export class UserProfile {

}
