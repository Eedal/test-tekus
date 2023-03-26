import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import {
  Subscriber,
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

  getById(id: string): Observable<Subscriber> {
    return this.http.get<Subscriber>(`${this.subscribersUrl}${id}`);
  }

  edit(
    subscriber: SubscriberBase,
    id: string
  ): Observable<SubscriberSaveResponse[]> {
    return this.http.put<SubscriberSaveResponse[]>(
      `${this.subscribersUrl}${id}`,
      subscriber
    );
  }

  remove(subscriberId: number): Observable<any> {
    console.log("aaveve")
    return this.http.delete<any>(`${this.subscribersUrl}${subscriberId}`);

  }
}
