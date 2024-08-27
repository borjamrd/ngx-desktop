import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[badge]',
  standalone: true
})
export class BadgeDirective {

  private el: ElementRef = inject(ElementRef)
  constructor() {
    if ((this.el.nativeElement)) {
      this.el.nativeElement.classList.add('flex', 'gap-2', 'px-2', 'py-1', 'bg-neutral-100', 'dark:bg-neutral-500', 'dark:text-white', 'text-neutral-800', 'items-center', 'rounded-md')
    }

  }

}
