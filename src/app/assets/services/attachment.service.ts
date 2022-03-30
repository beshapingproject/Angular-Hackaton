import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { AttachmentResponse } from '../classes/attachment';

@Injectable({
  providedIn: 'root',
})
export class AttachmentService {
  constructor(private http: HttpClient) {}

  upload(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http
      .post<AttachmentResponse>(environment.apiAttachmentUpload, formData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Qualcosa è andato storto!',
    });
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
