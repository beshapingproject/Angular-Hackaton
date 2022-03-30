import {  TicketInterface } from '../interfaces/ticket';

export class Ticket implements TicketInterface {
  id: number;
  subCategory: string;
  content: string;
  subject: string;
  status: string;
  attachmentId: Array<number>;
  constructor(
    id: number,
    subCategory: string,
    content: string,
    subject: string,
    status: string,
    attachmentId: Array<number>
  ) {
    this.id = id;
    this.subCategory = subCategory;
    this.content = content;
    this.subject = subject;
    this.status = status;
    this.attachmentId = attachmentId;
  }
}
