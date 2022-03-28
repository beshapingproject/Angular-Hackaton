import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { JsonFAQ } from '../classes/json';

@Injectable({
  providedIn: 'root',
})
export class JSONService {
  constructor(private http: HttpClient) {}

  getFAQ() {
    return this.http.get<JsonFAQ[]>('assets/json/faq.json');
  }

  private handleError(error: HttpErrorResponse) {
    alert(error.message);
  }
}
