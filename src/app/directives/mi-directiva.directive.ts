import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = 'green';
    this.element.nativeElement.style.fontWeight = 'bold';
  }

}
