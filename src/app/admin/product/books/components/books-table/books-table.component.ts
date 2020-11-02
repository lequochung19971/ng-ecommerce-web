import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit {
  ELEMENT_DATA = [
    {
      id: 1,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 2,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 3,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 4,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 5,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 6,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 7,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 8,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 9,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 10,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
    {
      id: 11,
      name: 'Hành trình về phương đông',
      category: 'Sách hay',
      author: 'Lê Quốc Hùng',
      translator: 'Lê Quốc Hùng',
      supplier: 'Lê Quốc Hùng',
      publisher: 'Lê Quốc Hùng',
    },
  ];
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = [
    'name',
    'category',
    'author',
    'translator',
    'supplier',
    'publisher',
    'action',
  ];
  constructor() {}

  ngOnInit(): void {}
}
