import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appNumericOnly]'
})
export class NumericOnlyDirective {
  @HostListener('input', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    const input = ev.target as HTMLInputElement;
    input.value = String(input.value.replace(/\D+/g, ''));
  }

}
