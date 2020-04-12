import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PublishersFormService } from '../../services/publishers-form.service';

@Component({
  selector: 'app-publishers-form',
  templateUrl: './publishers-form.component.html',
  styleUrls: ['./publishers-form.component.scss'],
})
export class PublishersFormComponent implements OnInit {
  form: FormGroup;
  uploaded: boolean = false;
  constructor(protected publishersFormService: PublishersFormService) {}

  ngOnInit(): void {
    this.form = this.publishersFormService.getPublisherForm();
  }
}
