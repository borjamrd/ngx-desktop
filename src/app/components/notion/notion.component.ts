import { NotionDatabaseItem, NotionService } from 'app/shared/services/notion-posts.service';
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { NotionDatabaseItemComponent } from '../notion-database-item/notion-database-item.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bm-notion',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgClass, NgIf, JsonPipe, NotionDatabaseItemComponent, MatIconModule],
  templateUrl: './notion.component.html',
  styleUrl: './notion.component.scss'
})
export class NotionComponent {

  selectedItem: undefined | NotionDatabaseItem;
  private notionService: NotionService = inject(NotionService);

  notionPageItems$: Observable<NotionDatabaseItem[]> = this.notionService.getPosts().pipe(delay(2000));

  setItemSelected(item: NotionDatabaseItem) {
    this.selectedItem = item;
  }
}
