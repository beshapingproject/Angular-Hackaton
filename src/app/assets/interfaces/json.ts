export interface JsonFAQInterface {
  id: number;
  img: string;
  title: string;
  details: Array<DetailsInterface>;
}

export interface DetailsInterface {
  id: number;
  img: string;
  title: string;
  descriptions: Array<DescriptionsInterface>;
}
export interface DescriptionsInterface {
  id: number;
  img: string;
  title: string;
  description: string;
}
