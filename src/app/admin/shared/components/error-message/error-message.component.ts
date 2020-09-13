import { Component, OnInit, Input } from '@angular/core';
import { ErrorMessageService } from '../../services/error-message.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() control: any;
  constructor(protected errorMessageService: ErrorMessageService) {}

  ngOnInit(): void {}

  get errrorMessage(): string {
    if (this.control instanceof FormControl) {
      if (this.control && this.control.errors) {
        const errorName = Object.keys(this.control.errors)[0] as string;
        const valueInsideError = this.control.errors[errorName] as any;

        return this.errorMessageService.getErrorMessage(valueInsideError, errorName);
      }
    }
  }
}
