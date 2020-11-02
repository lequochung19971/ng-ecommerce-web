import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BooksFormService } from '../../services/books-form.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss'],
})
export class BooksFormComponent implements OnInit {
  form: FormGroup;

  constructor(protected booksFormService: BooksFormService) {}

  ngOnInit(): void {
    this.form = this.booksFormService.getBooksForm();
  }

  removeImage(image) {
    console.log(image);
  }
}
