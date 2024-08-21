import { Component, Input } from '@angular/core';
import { NotionDatabaseItem } from 'app/shared/services/notion-posts.service';

@Component({
  selector: 'bm-notion-database-item',
  standalone: true,
  imports: [],
  templateUrl: './notion-database-item.component.html',
  styleUrl: './notion-database-item.component.scss'
})
export class NotionDatabaseItemComponent {

  @Input() item!: NotionDatabaseItem

}
