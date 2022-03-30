import {
  AttachmentResponseInterface,
  ResponseInterface,
} from '../interfaces/attachment';

export class AttachmentResponse implements AttachmentResponseInterface {
  server: number;
  response: Response;
  constructor(server: number, response: Response) {
    this.server = server;
    this.response = response;
  }
}
export class Response implements ResponseInterface {
  status: string;
  attachmentId: number;
  errorMessage: string;
  constructor(status: string, attachmentId: number, errorMessage: string) {
    this.status = status;
    this.attachmentId = attachmentId;
    this.errorMessage = errorMessage;
  }
}
