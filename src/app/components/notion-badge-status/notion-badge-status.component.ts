import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotionDatabaseItem } from 'app/shared/services/notion.service';

@Component({
  selector: 'bm-notion-badge-status',
  standalone: true,
  imports: [NgClass],
  templateUrl: './notion-badge-status.component.html',
  styleUrl: './notion-badge-status.component.scss'
})
export class NotionBadgeStatusComponent {
  @Input() status!: NotionDatabaseItem['status']


  get classByStatus(): string {

    switch (this.status) {
      case 'Finished':
        return 'bg-green-500/30 text-green-800 dark:text-white'
      case 'In progress':
        return 'bg-blue-500/30 text-blue-800 dark:text-white'
      case 'To do':
        return 'bg-red-500/30 text-red-800 dark:text-white'
      default:
        return ''
    }

  }
  get nameByStatus(): string {
    switch (this.status) {
      case 'Finished':
        return 'Finished'
      case 'In progress':
        return 'In progress'
      case 'To do':
        return 'To do'
      default:
        return ''
    }
  }
}
