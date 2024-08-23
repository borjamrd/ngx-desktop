import { NotionDatabaseItem, NotionService } from 'app/shared/services/notion.service';
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { NotionDatabaseItemComponent } from '../notion-database-item/notion-database-item.component';
import { MatIconModule } from '@angular/material/icon';
import { NotionPageComponent } from '../notion-page/notion-page.component';

@Component({
  selector: 'bm-notion',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgClass, NgIf, JsonPipe, NotionDatabaseItemComponent, MatIconModule, NotionPageComponent],
  templateUrl: './notion.component.html',
  styleUrl: './notion.component.scss'
})
export class NotionComponent {

  selectedItem: undefined | NotionDatabaseItem;
  private notionService: NotionService = inject(NotionService);

  notionPageItems$: Observable<NotionDatabaseItem[]> = this.notionService.getTableItems();

  setItemSelected(item: NotionDatabaseItem) {
    this.selectedItem = item;
  }
}
