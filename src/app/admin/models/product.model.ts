import { Author } from './authors.model';
import { Supplier } from './suppliers.model';
import { Publisher } from './publishers.model';
import { Translator } from './translators.model';

export class Product {
  uuid: String;
  name: String;
  category: String;
  author: Author;
  translator: Translator;
  supplier: Supplier;
  publisher: Publisher;
  priceOut: Number;
  republish: Number;
  sale: Number;
  saleStartDate: String;
  saleEndDate: String;
  quantity: Number;
  status: Number;
  pageQuantity: Number;
  weight: Number;
  size: Number;
  image: String;
  language: String;
  description: String;
  shortDescription: String;
  publishedDate: Date;
  releaseDate: Date;
}
