import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import {
  SubscriberBase,
  SubscriberResponse,
  SubscriberSaveResponse,
} from '../interfaces/subscriber.interface';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  subscribersUrl = environment.API_URL + 'subscribers/';

  constructor(private http: HttpClient) {}

  getSubscribers(
    sortOrder = 'PublicId',
    sortType = 1
  ): Observable<SubscriberResponse> {
    return this.http.get<SubscriberResponse>(
      `${this.subscribersUrl}?sortOrder=${sortOrder}&sortType=${sortType}`
    );
  }

  createSubscribers(
    subscribers: SubscriberBase
  ): Observable<SubscriberSaveResponse[]> {
    return this.http.post<SubscriberSaveResponse[]>(
      this.subscribersUrl,
      subscribers
    );
  }
}
