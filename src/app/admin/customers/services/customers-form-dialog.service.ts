import { Injectable } from '@angular/core';
import { FormDialogService } from '../../shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class CustomersFormDialogService {
  constructor(protected formDialog: FormDialogService) {}
}
