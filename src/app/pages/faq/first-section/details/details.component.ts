import { Component, Input, OnInit, Output } from '@angular/core';
import { Details } from 'src/app/assets/classes/json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() @Output() detail!: Details;

  constructor() {}

  ngOnInit(): void {
    console.log(this.detail);
  }
}
