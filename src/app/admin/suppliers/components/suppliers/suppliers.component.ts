import { Component, OnInit } from '@angular/core';
import { SuppliersFormDialogService } from '../../services/suppliers-form-dialog.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
})
export class SuppliersComponent implements OnInit {
  constructor(protected suppliersFormDialogService: SuppliersFormDialogService) {}

  ngOnInit(): void {}

  openCreateDialog() {
    this.suppliersFormDialogService.openSuppliersFormDialog();
  }
}
