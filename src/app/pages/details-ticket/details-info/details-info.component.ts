import { Component, Input, OnInit } from '@angular/core';
import { TicketResponse } from 'src/app/assets/classes/ticket';

@Component({
  selector: 'app-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.css'],
})
export class DetailsInfoComponent implements OnInit {
  status: string = 'btn-primary';
  @Input() ticket!: TicketResponse;
  day: string = '';
  month: string = '';
  year: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getDate(this.ticket.created);
  }
  getDate(date: string) {
    this.day = date.substring(8, 10);
    this.month = date.substring(5, 7);
    this.year = date.substring(0, 4);
    const day = Number(this.day);
    const month = Number(this.month);
    const year = Number(this.year);
    const formatter = new Intl.DateTimeFormat('it', { month: 'short' });
    const month2 = formatter.format(new Date(year, month - 1, day));
    this.month = month2;
  }
}
