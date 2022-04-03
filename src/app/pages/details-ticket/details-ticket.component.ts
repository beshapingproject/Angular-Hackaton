import { Component, OnInit, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketFilters, TicketResponse } from 'src/app/assets/classes/ticket';
import { TicketService } from 'src/app/assets/services/ticket.service';

@Component({
  selector: 'app-details-ticket',
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.css'],
})
export class DetailsTicketComponent implements OnInit {
  @Output() ticket!: TicketResponse;
  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let routerParam = this.route.snapshot.paramMap.get('id');
    if (routerParam) {
      const id = Number.parseInt(routerParam);
      this.getDetails(id);
    }
  }

  goToHistory() {
    this.router.navigate(['/pages/ticket/history']);
  }
  goToDashboard() {
    this.router.navigate(['/pages/ticket']);
  }

  getDetails(id: number) {
    this.ticketService.getTicketDetails(id).subscribe((data) => {
      this.ticket = data;
    });
  }
}
