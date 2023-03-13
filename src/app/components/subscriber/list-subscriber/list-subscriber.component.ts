import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscriber } from 'src/app/interfaces/subscriber.interface';
import { MatDialog } from '@angular/material/dialog';
import { SubscriberDetailComponent } from '../subscriber-detail/subscriber-detail.component';

@Component({
  selector: 'app-list-subscriber',
  templateUrl: './list-subscriber.component.html',
  styleUrls: ['./list-subscriber.component.css'],
})
export class ListSubscriberComponent implements OnChanges {
  constructor(public dialog: MatDialog) {}

  @Input() subscribers!: Subscriber[];
  dataSource!: MatTableDataSource<Subscriber>;

  displayedColumns: string[] = [
    'PublicId',
    'Name',
    'Email',
    'CountryName',
    'Actions',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['subscribers']) {
      this.dataSource = new MatTableDataSource<Subscriber>(this.subscribers);
      this.dataSource.paginator = this.paginator;
    }
  }
  
  openSubscriberDetail(subscriber: Subscriber): void {
    const dialogRef = this.dialog.open(SubscriberDetailComponent, {
      width: '400px',
      data: { ...subscriber },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.subscribers.findIndex((s) => s.PublicId === result.PublicId);
        this.subscribers[index] = result;
      }
    });
  }

    showSubscriber(subscriber: Subscriber) {
      this.openSubscriberDetail(subscriber);
      console.log(
        '🚀 ~ file: list-subscriber.component.ts:34 ~ ListSubscriberComponent ~ showSubscriber ~ subscriber:',
        subscriber
      );
    }
  editSubscriber(subscriber: Subscriber) {}

  removeSubscriber(subscriber: Subscriber) {}
}
