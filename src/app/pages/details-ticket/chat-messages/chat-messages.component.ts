import { Component, Input, OnInit } from '@angular/core';
import { Ticket, TicketResponse } from 'src/app/assets/classes/ticket';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css'],
})
export class ChatMessagesComponent implements OnInit {
  @Input() ticket!: TicketResponse;
  day: string = '';
  month: string = '';
  year: string = '';
  time: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getDate(this.ticket.created);
  }
  getDate(date: string) {
    this.day = date.substring(8, 10);
    this.month = date.substring(5, 7);
    this.year = date.substring(0, 4);
    this.time = date.substring(11, 16);
    const day = Number(this.day);
    const month = Number(this.month);
    const year = Number(this.year);
    const formatter = new Intl.DateTimeFormat('it', { month: 'short' });
    const month2 = formatter.format(new Date(year, month - 1, day));
    this.month = month2;
  }
}
