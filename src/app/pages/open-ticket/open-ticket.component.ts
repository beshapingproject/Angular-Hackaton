import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JsonFAQ } from 'src/app/assets/classes/json';
import { Ticket } from 'src/app/assets/classes/ticket';
import { JSONService } from 'src/app/assets/services/json.service';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.css'],
})
export class OpenTicketComponent implements OnInit {
  ticket: Ticket = new Ticket(0, '', '', '', '', []);
  faqs: Array<JsonFAQ> = [];
  subArgoments: Array<String> = [];
  constructor(private jsonService: JSONService, private router: Router) {}

  ngOnInit(): void {
    this.loadSubArgoment();
  }
  loadSubArgoment() {
    this.jsonService.getFAQ().subscribe((data) => {
      this.faqs = <JsonFAQ[]>data;
      for (let i = 0; i < this.faqs.length; i++) {
        let details = this.faqs[i].details;
        for (let y = 0; y < details.length; y++) {
          this.subArgoments.push(details[y].title);
        }
      }
    });
  }

  openTicket() {
    console.log(this.ticket);
  }
}
