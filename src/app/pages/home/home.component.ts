import { Component } from '@angular/core';
import { Subscriber } from 'src/app/interfaces/subscriber.interface';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  subscribers: Subscriber[] = [];
  
  constructor( private subscriptionsService: SubscriberService) {
    this.subscriptionsService.getSubscribers().subscribe(response =>   {
      this.subscribers = response.Data;
    })
  }
}
