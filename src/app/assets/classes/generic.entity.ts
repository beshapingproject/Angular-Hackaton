import {
  ErrorMessageInterface,
  GenericEntityInterface,
} from '../interfaces/generic.entity';

export class GenericEntity implements GenericEntityInterface {
  created: string;
  updated: string;
  constructor(created: string, updated: string) {
    this.created = created;
    this.updated = updated;
  }
}

export class ErrorMessage implements ErrorMessageInterface {
  type: string;
  description: string;
  constructor(type: string, description: string) {
    this.type = type;
    this.description = description;
  }
}
