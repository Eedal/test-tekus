import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username: string;

  constructor(private router: Router) {
    this.username = localStorage.getItem('username') || '';
  }

  goToHome() {
    this.router.navigate(['/subscribers']);
  }
}
