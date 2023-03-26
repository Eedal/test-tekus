import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'src/app/interfaces/subscriber.interface';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.css']
})
export class SubscriberListComponent {
  subscribers: Subscriber[] = [];
  totalSubscribers!: number;
  currentPage = 1;
  subscribersPerPage = 10;

  constructor(
    private subscriptionsService: SubscriberService,
    private router: Router
  ) {
    this.subscriptionsService.getSubscribers().subscribe((response) => {
      this.subscribers = response.Data;
      this.totalSubscribers = response.Count;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.totalSubscribers / this.subscribersPerPage);
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  onPageChanged(page: number) {
    this.currentPage = page;
  }

  handleAddSubscriber() {
    this.router.navigate(['/subscribers/create']);
  }
}
