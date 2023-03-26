import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subscriber-modal',
  templateUrl: './subscriber-modal.component.html',
  styleUrls: ['./subscriber-modal.component.css']
})
export class SubscriberModalComponent {
  constructor(private dialogRef: MatDialogRef<SubscriberModalComponent>) {}

  close() {
    this.dialogRef.close();
  }

}
