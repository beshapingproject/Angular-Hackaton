import { Component, Input, OnInit, Output } from '@angular/core';
import { Descriptions } from 'src/app/assets/classes/json';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() @Output() question!: Descriptions;

  constructor() { }

  ngOnInit(): void {
  }

}
