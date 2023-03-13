import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { SubscriberResponse } from '../interfaces/subscriber.interface';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  subscribersUrl = environment.API_URL + 'subscribers/';

  constructor(private http: HttpClient) {}

  getSubscribers(): Observable<SubscriberResponse> {
    return this.http.get<SubscriberResponse>(this.subscribersUrl);
  }
}
