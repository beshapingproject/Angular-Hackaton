import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from 'src/app/assets/classes/json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() @Output() detail!: Details;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openTicket() {
    localStorage.setItem('subCategory', JSON.stringify(this.detail.title));
    this.router.navigate(['/pages/ticket/new']);
  }
}
