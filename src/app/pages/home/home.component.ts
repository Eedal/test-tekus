import { Component } from '@angular/core';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // subscribers: Subscriber[];
  constructor( private subscriptionsService: SubscriberService) {
    this.subscriptionsService.getSubscribers().subscribe(response =>   {
      console.log(response)
    })
  }



}
