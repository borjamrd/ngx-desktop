import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[focusDialog]',
  standalone: true,
  host: {
    '(click)': 'updateZIndex()'
  }
})
export class FocusDialogDirective implements OnInit {

  private _elementRef = inject(ElementRef);

  ngOnInit(): void {
    this.updateZIndex();
  }

  updateZIndex(): void {
    const dialogElement = this._elementRef.nativeElement.closest('.cdk-global-overlay-wrapper') as HTMLElement;

    if (dialogElement) {
      const allDialogs = document.querySelectorAll<HTMLElement>('.cdk-global-overlay-wrapper');
      const baseZIndex = 1000;
      allDialogs.forEach(dialog => {
        dialog.style.zIndex = `${baseZIndex}`;
      });

      dialogElement.style.zIndex = `${baseZIndex + 1}`;
    }
  }
}
