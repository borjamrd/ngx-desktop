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
  standalone: true,
  imports: [RouterOutlet, NgClass, AngularQueryDevtools],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

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
    this.meta.updateTag({ name: 'description', content: 'Ngx desktop is an Angular desktop client' });
    this.meta.updateTag({ name: 'title', content: 'Ngx-desktop - Angular' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, defer, typescript, desktop-rocket' });
    this.meta.updateTag({ name: 'author', content: 'Borja Muñoz' });
    this.meta.updateTag({ property: 'og:image', content: 'assets/images/artic_monkeys.jpg' });
    // this.meta.addTag({ name: 'twitter:image', content: 'https://your-domain.com/assets/preview-image.jpg' });
  }
}
