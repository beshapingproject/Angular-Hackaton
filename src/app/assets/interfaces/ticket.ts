import {
  ErrorMessageInterface,
  GenericEntityInterface,
} from './generic.entity';

export interface TicketInterface {
  id: number;
  subCategory: string;
  content: string;
  subject: string;
  status: string;
  attachmentId: Array<number>;
}

export interface TicketFiltersInterface {
  createdFrom: string;
  createdTo: string;
  status: string;
}

export interface TicketResponseInterface extends GenericEntityInterface {
  id: number;
  subCategory: string;
  content: string;
  subject: string;
  status: string;
  response: ErrorMessageInterface;
}
