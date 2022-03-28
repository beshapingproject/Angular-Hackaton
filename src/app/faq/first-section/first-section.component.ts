import { Component, Input, OnInit, Output } from '@angular/core';
import { JsonFAQ, Details } from 'src/app/assets/classes/json';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent implements OnInit {
  @Input() @Output() faq!: JsonFAQ;

  constructor() {}

  ngOnInit(): void {}
}
