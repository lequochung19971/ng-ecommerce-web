import { Component, OnInit } from '@angular/core';
import { AuthorsFormDialogService } from '../../services/authors-form-dialog.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  constructor(protected authorsFormDialogService: AuthorsFormDialogService) {}

  ngOnInit(): void {}

  openCreateAuthorsDialog() {
    this.authorsFormDialogService.openAuthorFormDialog();
  }
}
