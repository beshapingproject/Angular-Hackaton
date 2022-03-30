import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AttachmentResponse,
  Response,
} from 'src/app/assets/classes/attachment';
import { JsonFAQ } from 'src/app/assets/classes/json';
import { Ticket } from 'src/app/assets/classes/ticket';
import { AttachmentService } from 'src/app/assets/services/attachment.service';
import { JSONService } from 'src/app/assets/services/json.service';
import { TicketService } from 'src/app/assets/services/ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.css'],
})
export class OpenTicketComponent implements OnInit {
  subCategory: string = '';
  ticket: Ticket = new Ticket(0, '', '', '', '', []);
  faqs: Array<JsonFAQ> = [];
  subArgoments: Array<String> = [];
  attachmentResponse: AttachmentResponse = new AttachmentResponse(
    0,
    new Response('', 0, '')
  );

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor(
    private jsonService: JSONService,
    private router: Router,
    private uploadService: AttachmentService,
    private ticketService: TicketService
  ) {}

  goToHistory() {
    this.router.navigate(['/pages/ticket/history']);
  }

  goToDashboard() {
    this.router.navigate(['/pages/ticket']);
  }

  ngOnInit(): void {
    let subCategoryLocal = localStorage.getItem('subCategory');
    if (subCategoryLocal != null) {
      this.subCategory = JSON.parse(subCategoryLocal);
      localStorage.removeItem('subCategory');
    }
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
    this.progress = 0;
    Swal.fire({
      icon: 'question',
      title: 'Vuoi inviare il ticket corrente?',
      showDenyButton: true,
      confirmButtonText: 'Invia',
      denyButtonText: `Annulla`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.upload();
        this.createTicket();
        this.progress = 100;
        setTimeout(() => {
          Swal.fire({
            title: 'Ticket Inviato!',
            text: '',
            icon: 'success',
            confirmButtonText: 'Stato',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.router.navigate(['/pages/ticket/history']);
            }
          });
        }, 500);
      } else if (result.isDenied) {
        Swal.fire('Non inviato', '', 'info');
      }
    });
  }

  createTicket() {
    if (this.ticket.subCategory != '') {
      this.ticketService.saveNewTicket(this.ticket).subscribe();
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe({
          next: (event) => {
            this.attachmentResponse = event;
            this.ticket.attachmentId = [
              this.attachmentResponse.response.attachmentId,
            ];
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          },
        });
      }
      this.selectedFiles = undefined;
    }
  }
}
