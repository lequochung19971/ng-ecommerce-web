import { Component, OnInit } from '@angular/core';
import { BooksFormDialogService } from '../../services/books-form-dialog.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(protected booksFormDialogService: BooksFormDialogService) {}

  ngOnInit(): void {}

  openCreateBooksDialog() {
    this.booksFormDialogService.openBooksFormDialog();
  }
}
