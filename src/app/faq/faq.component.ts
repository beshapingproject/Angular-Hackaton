import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JSONService } from '../assets/services/json.service';
import { JsonFAQ } from '../assets/classes/json';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  @Output() faqs: Array<JsonFAQ> = [];
  constructor(private jsonService: JSONService) {}

  ngOnInit(): void {
    this.loadJson();
  }
  loadJson() {
    this.jsonService.getFAQ().subscribe((data) => {
      this.faqs = <JsonFAQ[]>data;
      console.log(this.faqs);
    });
  }
}
