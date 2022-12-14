import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAllowOnlyNumber]'
})
export class AllowOnlyNumberDirective {

  regexStr = '^([0-9 +]*)$';
  constructor(private _el: ElementRef) {
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }

}
