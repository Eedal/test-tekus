import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriber-create',
  templateUrl: './subscriber-create.component.html',
  styleUrls: ['./subscriber-create.component.css'],
})
export class SubscriberCreateComponent {
  constructor(private router: Router) {}

  goToHome(){
    this.router.navigate(['/subscribers'])
  }
}
