import { Component, OnInit } from '@angular/core';
import { PublishersFormDialogService } from '../../services/publishers-form-dialog.service';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss'],
})
export class PublishersComponent implements OnInit {
  constructor(protected publishersFormDialogService: PublishersFormDialogService) {}

  ngOnInit(): void {}

  openCreateDialog() {
    this.publishersFormDialogService.openPublisherFormDialog();
  }
}
