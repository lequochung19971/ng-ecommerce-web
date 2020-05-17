import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BooksFormService {
  private form = new FormGroup({
    uuid: new FormControl(null),
    name: new FormControl(''),
    productCode: new FormControl(''),
    category: new FormControl(''),
    author: new FormControl(''),
    translator: new FormControl(''),
    supplier: new FormControl(''),
    publisher: new FormControl(''),
    priceOut: new FormControl(''),
    promotionPriceOut: new FormControl(''),
    republish: new FormControl(''),
    sale: new FormControl(''),
    saleStartDate: new FormControl(''),
    saleEndDate: new FormControl(''),
    quantity: new FormControl(''),
    pageQuantity: new FormControl(''),
    weight: new FormControl(''),
    size: new FormControl(''),
    image: new FormControl(''),
    language: new FormControl(''),
    description: new FormControl(''),
    shortDescription: new FormControl(''),
    publishDate: new FormControl(''),
    releaseDate: new FormControl(''),
    promotionInfo: new FormControl(''),
    promotionStartDate: new FormControl(''),
    promotionEndDate: new FormControl(''),
  });
  constructor() {}

  getBooksForm() {
    return this.form;
  }
}
