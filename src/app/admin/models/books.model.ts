import { Author } from './authors.model';

export class Authors {
  uuid: Number;
  title: String;
  category: String;
  pages: Number;
  description: String;
  sale: String;
  saleStartDate: String;
  saleEndDate: String;
  price: String;
  author: Author;
  shortDescription: String;
  publisher: String;
  supplier: String;
  publishedDate: String;
  images?: String;
}
