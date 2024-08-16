import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { NgClass } from '@angular/common';
import { TasksbarComponent } from './core/layout/tasksbar/tasksbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desktop-rocket';
  themeService: ThemeService = inject(ThemeService);
}
