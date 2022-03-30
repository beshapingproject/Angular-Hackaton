export interface TicketInterface {
  id: number;
  subCategory: string;
  content: string;
  subject: string;
  status: string;
  attachmentId: Array<number>;
}
