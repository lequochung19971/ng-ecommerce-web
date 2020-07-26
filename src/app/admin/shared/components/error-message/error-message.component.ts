import { Component, OnInit, Input } from '@angular/core';
import { ErrorMessageService } from '../../services/error-message.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() fieldName: string;
  @Input() control: any;
  error: string;
  constructor(protected errorMessageService: ErrorMessageService) {}

  ngOnInit(): void {
    console.log(this.control);
  }

  handleErrorMessage() {
    if (this.control) {
      return this.errorMessageService.getErrorMessage(this.control);
    }
  }
}
