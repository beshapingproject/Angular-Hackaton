import {
  JsonFAQ2Interface,
  JsonFAQ3Interface,
  JsonFAQInterface,
} from '../interfaces/json';

export class JsonFAQ implements JsonFAQInterface {
  id: number;
  img: string;
  title: string;
  JsonFAQ2: Array<JsonFAQ2>;
  constructor(
    id: number,
    img: string,
    title: string,
    JsonFAQ2: Array<JsonFAQ2>
  ) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.JsonFAQ2 = JsonFAQ2;
  }
}

export class JsonFAQ2 implements JsonFAQ2Interface {
  id: number;
  img: string;
  title: string;
  JsonFAQ3: Array<JsonFAQ3>;
  constructor(
    id: number,
    img: string,
    title: string,
    JsonFAQ3: Array<JsonFAQ3>
  ) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.JsonFAQ3 = JsonFAQ3;
  }
}
export class JsonFAQ3 implements JsonFAQ3Interface {
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
