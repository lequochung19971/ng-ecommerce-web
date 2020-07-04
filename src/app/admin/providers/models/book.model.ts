import { Author } from './author.model';
import { Supplier } from './supplier.model';
import { Publisher } from './publisher.model';
import { Translator } from './translator.model';
import { Category } from './category.model';

export class Book {
  uuid: String;
  name: String;
  productCode: String;
  category: Category;
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
