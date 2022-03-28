export interface JsonFAQInterface {
  id: number;
  img: string;
  title: string;
  JsonFAQ2: Array<JsonFAQ2Interface>;
}

export interface JsonFAQ2Interface {
  id: number;
  img: string;
  title: string;
  JsonFAQ3: Array<JsonFAQ3Interface>;
}
export interface JsonFAQ3Interface {
  id: number;
  img: string;
  title: string;
  description: string;
}
