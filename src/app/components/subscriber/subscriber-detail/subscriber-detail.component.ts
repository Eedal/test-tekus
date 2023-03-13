import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscriber } from 'src/app/interfaces/subscriber.interface';

@Component({
  selector: 'app-subscriber-detail',
  templateUrl: './subscriber-detail.component.html',
  styleUrls: ['./subscriber-detail.component.css'],
})
export class SubscriberDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<SubscriberDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public subscriber: Subscriber
  ) {}
}
