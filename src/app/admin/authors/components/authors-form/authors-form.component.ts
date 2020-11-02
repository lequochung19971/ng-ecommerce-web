import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorsFormService } from '../../services/authors-form.service';

@Component({
  selector: 'app-authors-form',
  templateUrl: './authors-form.component.html',
  styleUrls: ['./authors-form.component.scss'],
})
export class AuthorsFormComponent implements OnInit {
  form: FormGroup;

  constructor(protected authorsFormService: AuthorsFormService) {}

  ngOnInit(): void {
    this.form = this.authorsFormService.getAuthorForm();
  }
}
