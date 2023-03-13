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

@Component({
  selector: 'app-list-subscriber',
  templateUrl: './list-subscriber.component.html',
  styleUrls: ['./list-subscriber.component.css'],
})
export class ListSubscriberComponent implements OnChanges {
  @Input() subscribers!: Subscriber[];
  dataSource!: MatTableDataSource<Subscriber>;

  displayedColumns: string[] = ['PublicId', 'Name', 'Email', 'CountryName'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['subscribers']) {
      this.dataSource = new MatTableDataSource<Subscriber>(this.subscribers);
      this.dataSource.paginator = this.paginator;
    }
  }
}
