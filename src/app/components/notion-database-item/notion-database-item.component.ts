import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotionDatabaseItem } from 'app/shared/services/notion.service';

@Component({
  selector: 'bm-notion-database-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './notion-database-item.component.html',
  styleUrl: './notion-database-item.component.scss'
})
export class NotionDatabaseItemComponent {

  @Input() item!: NotionDatabaseItem
  @Output() itemSelected = new EventEmitter<NotionDatabaseItem>()

  get classByStatus(): string {

    switch (this.item.status) {
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

}
