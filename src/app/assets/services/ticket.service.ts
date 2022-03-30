import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Ticket } from '../classes/ticket';
import Swal from 'sweetalert2';

import 'sweetalert2/src/sweetalert2.scss';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  saveNewTicket(ticket: Ticket) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(ticket);
    return this.http
      .post(environment.apiTicketAdd, body, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND';
    switch (error.error.type) {
      case ENTITY_NOT_FOUND:
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Il chatID inserito non è presente!',
        });
        break;
      default:
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qualcosa è andato storto!',
        });
        break;
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
