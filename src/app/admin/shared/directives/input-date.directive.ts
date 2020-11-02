import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputDate]',
})
export class InputDateDirective {
  regexNumber = /^[0-9]*$/;
  dateFormat = {
    dayLength: 2,
    monthLength: 5,
    dateLength: 10,
  };
  constructor(private el: ElementRef) {}

  @Input('appInputDate') inputDate: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent>event;
    if (this.inputDate) {
      if (this.checkAllowKeyCode(e)) {
        return;
      }
      this.checkInputDate(e);
    }
  }

  checkInputDate(event) {
    const character = String.fromCharCode(event.keyCode);
    if (!this.regexNumber.test(character)) {
      event.preventDefault();
    }

    const value = this.el.nativeElement.value;
    if (value.length >= this.dateFormat.dateLength) {
      event.preventDefault();
    }

    if (
      value.length === this.dateFormat.dayLength ||
      value.length === this.dateFormat.monthLength
    ) {
      this.el.nativeElement.value = `${value}/`;
    }
  }

  checkAllowKeyCode(event) {
    if (
      [46, 8, 9].indexOf(event.keyCode) !== -1 ||
      // Allow: Ctrl + A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Allow: Ctrl + C
      (event.keyCode == 67 && event.ctrlKey === true) ||
      // Allow: Ctrl + V
      (event.keyCode == 86 && event.ctrlKey === true) ||
      // Allow: Ctrl + X
      (event.keyCode == 88 && event.ctrlKey === true) ||
      // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      return true;
    }

    return false;
  }
}
