import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { customIcons } from './shared/types/icon.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // host: {
  //   class: 'h-screen w-screen'
  // }
})
export class AppComponent {
  title = 'desktop-rocket';
  themeService: ThemeService = inject(ThemeService);

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.themeService.setTheme('dark')
    customIcons.forEach(icon => this.matIconRegistry.addSvgIcon(icon.svg, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url)));

  }
}
