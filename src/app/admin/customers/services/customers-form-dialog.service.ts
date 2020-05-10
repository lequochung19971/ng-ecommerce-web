import { Injectable } from '@angular/core';
import { FormDialogService } from 'src/app/shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class CustomersFormDialogService {
  constructor(protected formDialog: FormDialogService) {}
}
