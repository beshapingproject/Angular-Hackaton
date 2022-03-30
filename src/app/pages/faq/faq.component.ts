import { Component, OnInit, Output } from '@angular/core';
import { JSONService } from '../../assets/services/json.service';
import { JsonFAQ } from '../../assets/classes/json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  @Output() faqs: Array<JsonFAQ> = [];
  constructor(private jsonService: JSONService, private router: Router) {}

  ngOnInit(): void {
    this.loadJson();
  }
  loadJson() {
    this.jsonService.getFAQ().subscribe((data) => {
      this.faqs = <JsonFAQ[]>data;
    });
  }

  openNewTicket() {
    this.router.navigate(['/pages/ticket/new']);
  }
}
