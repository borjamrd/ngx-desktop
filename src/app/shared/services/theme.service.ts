import { DOCUMENT } from '@angular/common';
import { inject, Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  //must be initialized in app-component
  themeSignal = signal<string>('dark');

  document: Document = inject(DOCUMENT)
  private _renderer2: Renderer2

  constructor(
    rendererFactory: RendererFactory2,
  ) {
    this._renderer2 = rendererFactory.createRenderer(null, null)

  }

  setTheme(theme: string) {
    this._renderer2.addClass(this.document.body, theme)
    this.themeSignal.set(theme);
  }

  updateTheme() {
    this._renderer2.removeClass(this.document.body, this.themeSignal() === 'dark' ? 'dark' : 'light');
    this._renderer2.addClass(this.document.body, this.themeSignal() === 'dark' ? 'light' : 'dark');
    this.themeSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }
}
