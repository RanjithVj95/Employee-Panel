// import { Directive } from '@angular/core';
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appAllowOnlyChar]'
})
export class AllowOnlyCharDirective {

  regexStr = '^[a-zA-Z_ ]*$';
  constructor(private _el: ElementRef) {
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }
}
