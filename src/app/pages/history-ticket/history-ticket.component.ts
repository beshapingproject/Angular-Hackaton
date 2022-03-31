import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TicketFilters, TicketResponse } from 'src/app/assets/classes/ticket';
import { TicketService } from 'src/app/assets/services/ticket.service';

@Component({
  selector: 'app-history-ticket',
  templateUrl: './history-ticket.component.html',
  styleUrls: ['./history-ticket.component.css'],
})
export class HistoryTicketComponent implements OnInit {
  filters!: TicketFilters;
  @Output() ticketList: Array<TicketResponse> = [];
  constructor(private router: Router, private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getListTickets();
  }

  goToDashboard() {
    this.router.navigate(['/pages/ticket']);
  }

  getListTickets() {
    this.ticketService.getTickets(this.filters).subscribe((data) => {
      this.ticketList = <TicketResponse[]>data;
    });
  }
}
