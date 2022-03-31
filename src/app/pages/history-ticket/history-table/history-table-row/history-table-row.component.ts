import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketResponse } from 'src/app/assets/classes/ticket';

@Component({
  selector: 'tr[app-history-table-row]',
  templateUrl: './history-table-row.component.html',
  styleUrls: ['./history-table-row.component.css'],
})
export class HistoryTableRowComponent implements OnInit {
  status: string = 'btn-primary';
  @Input() ticket!: TicketResponse;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.ticket.status === 'CLOSED') {
      this.status = 'btn-danger';
    } else if (this.ticket.status === 'IN PROGRESS') {
      this.status = 'btn-warning';
    } else {
      this.status = 'btn-primary';
    }
  }

  details() {
    this.router.navigate(['/pages/ticket/details', this.ticket.id]);
  }
}
