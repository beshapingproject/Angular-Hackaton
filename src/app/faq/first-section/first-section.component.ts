import { Component, Input, OnInit } from '@angular/core';
import { JsonFAQ } from 'src/app/assets/classes/json';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent implements OnInit {
  @Input() faq!: JsonFAQ;

  constructor() {}

  ngOnInit(): void {}
}
