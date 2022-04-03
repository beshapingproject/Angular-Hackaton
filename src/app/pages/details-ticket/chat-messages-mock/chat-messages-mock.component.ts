import { Component, Input, OnInit } from '@angular/core';
import { TicketResponse } from 'src/app/assets/classes/ticket';

@Component({
  selector: 'app-chat-messages-mock',
  templateUrl: './chat-messages-mock.component.html',
  styleUrls: ['./chat-messages-mock.component.css'],
})
export class ChatMessagesMockComponent implements OnInit {
  @Input() ticket!: TicketResponse;
  hr: HR = new HR();
  day: string = '';
  month: string = '';
  year: string = '';
  time: string = '';

  hr_day: string = '';
  hr_month: string = '';
  hr_year: string = '';
  hr_time: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getDate(this.ticket.created);
    this.getHRDate(this.hr.date);
    this.checkMessage(this.ticket);
  }
  getDate(date: string) {
    this.day = date.substring(8, 10);
    this.month = date.substring(5, 7);
    this.year = date.substring(0, 4);
    this.time = date.substring(11, 16);
    const day = Number(this.day);
    const month = Number(this.month);
    const year = Number(this.year);
    const formatter = new Intl.DateTimeFormat('it', { month: 'short' });
    const month2 = formatter.format(new Date(year, month - 1, day));
    this.month = month2;
  }
  getHRDate(date: string) {
    this.hr_day = date.substring(8, 10);
    this.hr_month = date.substring(5, 7);
    this.hr_year = date.substring(0, 4);
    this.hr_time = date.substring(11, 16);
    const day = Number(this.hr_day);
    const month = Number(this.hr_month);
    const year = Number(this.hr_year);
    const formatter = new Intl.DateTimeFormat('it', { month: 'short' });
    const month2 = formatter.format(new Date(year, month - 1, day));
    this.hr_month = month2;
  }
  checkMessage(ticket: TicketResponse) {
    if (ticket.subCategory === 'Fondo Metasalute') {
      this.hr.message =
        "Per l'assistenza sanitaria, ti informiamo che l'adesione al fondo Metasalute previsto per il contratto metalmeccanico avviene in automatico per ogni dipendente e che il costo è totalmente a carico dell'azienda dal giorno 01.10.2017.";
    } else if (ticket.subCategory === 'Smartphone Aziendale') {
      this.hr.message =
        "Ciao Giovanni, puoi trovare il PIN all'interno dell'applicazione Vodafone APP sullo smartphone aziendale.";
    } else if (ticket.subCategory === 'Pc Aziendale') {
      this.hr.message =
        "Ciao Giovanni, per assistenza tecnica lato PC aziendale puoi contattare il numero: 800800833 per ricevere istruzioni sull'assisteza tecnica.";
    }
  }
}

export class HR {
  id: number = 0;
  message: string = 'Test';
  date: string = new Date().toISOString();
}
