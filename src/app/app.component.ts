import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { customIcons } from './shared/utils/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'desktop-rocket';

  private themeService: ThemeService = inject(ThemeService);
  private matIconRegistry = inject(MatIconRegistry)
  private domSanitizer = inject(DomSanitizer)

  constructor() {
    this.themeService.setTheme('dark')
    customIcons.forEach(icon => this.matIconRegistry.addSvgIcon(icon.svg, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url)));
  }
}
