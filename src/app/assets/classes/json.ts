import {
  DetailsInterface,
  DescriptionsInterface,
  JsonFAQInterface,
} from '../interfaces/json';

export class JsonFAQ implements JsonFAQInterface {
  id: number;
  img: string;
  title: string;
  details: Array<Details>;
  constructor(id: number, img: string, title: string, details: Array<Details>) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.details = details;
  }
}

export class Details implements DetailsInterface {
  id: number;
  img: string;
  title: string;
  descriptions: Array<Descriptions>;
  constructor(
    id: number,
    img: string,
    title: string,
    descriptions: Array<Descriptions>
  ) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.descriptions = descriptions;
  }
}
export class Descriptions implements DescriptionsInterface {
  id: number;
  img: string;
  title: string;
  description: string;
  constructor(id: number, img: string, title: string, description: string) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.description = description;
  }
}
