import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputLetter]',
})
export class InputLetterDirective {
  regexLetter = /^[a-zA-Z]*$/;
  constructor() {}

  @Input('appInputLetter') inputLetter: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent>event;
    if (this.inputLetter) {
      if (this.checkAllowKeyCode(e)) {
        return;
      }

      this.checkLetterInput(e);
    }
  }

  checkLetterInput(event) {
    const character = String.fromCharCode(event.keyCode);
    if (this.regexLetter.test(character)) {
      return;
    } else {
      event.preventDefault();
    }
  }

  checkAllowKeyCode(event) {
    if (
      // Allow: Delete, Backspace, Spacebar
      [46, 8, 32].indexOf(event.keyCode) !== -1 ||
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
