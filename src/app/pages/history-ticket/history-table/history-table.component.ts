import { Component, Input, OnInit } from '@angular/core';
import { TicketResponse } from 'src/app/assets/classes/ticket';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css'],
})
export class HistoryTableComponent implements OnInit {
  @Input() ticketList: Array<TicketResponse> = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.ticketList);
  }
}
