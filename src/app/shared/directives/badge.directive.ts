import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: '[badge]',
    standalone: true,
})
export class BadgeDirective {
    private el: ElementRef = inject(ElementRef);
    constructor() {
        this.el.nativeElement.classList.add(
            'flex',
            'gap-2',
            'px-1.5',
            'py-0.5',
            'bg-neutral-100',
            'w-fit',
            'dark:bg-neutral-500',
            'dark:text-white',
            'text-neutral-800',
            'items-center',
            'rounded-md',
            'text-xs'
        );
    }
}
