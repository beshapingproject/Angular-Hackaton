import { ErrorMessageInterface } from '../interfaces/generic.entity';
import {
  TicketFiltersInterface,
  TicketInterface,
  TicketResponseInterface,
} from '../interfaces/ticket';
import { ErrorMessage, GenericEntity } from './generic.entity';

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

export class TicketFilters implements TicketFiltersInterface {
  createdFrom: string;
  createdTo: string;
  status: string;
  constructor(createdFrom: string, createdTo: string, status: string) {
    this.createdFrom = createdFrom;
    this.createdTo = createdTo;
    this.status = status;
  }
}

export class TicketResponse
  extends GenericEntity
  implements TicketResponseInterface
{
  id: number;
  subCategory: string;
  content: string;
  subject: string;
  status: string;
  response: ErrorMessage;
  constructor(
    id: number,
    subCategory: string,
    content: string,
    subject: string,
    status: string,
    response: ErrorMessage,
    created: string,
    updated: string
  ) {
    super(updated, created);
    this.id = id;
    this.subCategory = subCategory;
    this.content = content;
    this.subject = subject;
    this.status = status;
    this.response = response;
  }
}
