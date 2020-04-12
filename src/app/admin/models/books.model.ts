import { Author } from './authors.model';

export class Authors {
  uuid: Number;
  title: String;
  author: Author;
  category: String;
  pages: Number;
  publisherName: String;
  publicationDate: String;
  images?: String;
}
