import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { customIcons } from './shared/utils/icons';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgClass, AngularQueryDevtools],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

  private themeService: ThemeService = inject(ThemeService);
  private matIconRegistry = inject(MatIconRegistry)
  private domSanitizer = inject(DomSanitizer)
  private meta = inject(Meta)

  constructor() {

    this.themeService.setTheme('dark')




    customIcons.forEach(icon => this.matIconRegistry.addSvgIcon(icon.svg, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url)));
  }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Ngx desktop is an Angular desktop client' });
    this.meta.addTag({ name: 'title', content: 'Ngx-desktop - Angular' });
    this.meta.addTag({ name: 'keywords', content: 'angular, defer, typescript, desktop-rocket' });
    this.meta.addTag({ name: 'author', content: 'Borja Muñoz' });
    this.meta.addTag({ property: 'og:image', content: 'assets/images/artic_monkeys.jpg' });
    this.meta.addTag({ property: 'og:url', content: 'https://ngx-desktop.vercel.app/' });
    this.meta.addTag({ property: 'og:type', content: 'website' });
    this.meta.addTag({ property: 'og:title', content: 'Ngx-desktop - Angular' });
    this.meta.addTag({ property: 'og:description', content: 'Ngx desktop is an Angular desktop client' });
    this.meta.addTag({ property: 'og:image', content: 'assets/images/artic_monkeys.jpg' });
    this.meta.addTag({ property: 'og:image:width', content: '1200' });
    this.meta.addTag({ property: 'og:image:height', content: '630' });
    this.meta.addTag({ property: 'og:image:alt', content: 'Ngx-desktop - Angular' });
    this.meta.addTag({ property: 'og:image:type', content: 'image/jpeg' });
    this.meta.addTag({ property: 'og:image:width', content: '1200' });
    // this.meta.addTag({ name: 'twitter:image', content: 'https://your-domain.com/assets/preview-image.jpg' });
  }
}
