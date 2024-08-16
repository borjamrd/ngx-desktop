import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../../../shared/services/theme.service';
@Component({
  selector: 'bm-tasksbar',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule],
  templateUrl: './tasksbar.component.html',
  styleUrl: './tasksbar.component.scss',
})
export class TasksbarComponent {
  themeService: ThemeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.updateTheme();
  }
}
