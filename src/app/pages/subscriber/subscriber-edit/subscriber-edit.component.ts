import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriber-edit',
  templateUrl: './subscriber-edit.component.html',
  styleUrls: ['./subscriber-edit.component.css'],
})
export class SubscriberEditComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/subscribers']);
  }
}
