import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-ticket',
  templateUrl: './history-ticket.component.html',
  styleUrls: ['./history-ticket.component.css'],
})
export class HistoryTicketComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDashboard() {
    this.router.navigate(['/pages/ticket']);
  }
}
