export interface AttachmentResponseInterface {
  server: number;
  response: ResponseInterface;
}

export interface ResponseInterface {
  status: string;
  attachmentId: number;
  errorMessage: string;
}
