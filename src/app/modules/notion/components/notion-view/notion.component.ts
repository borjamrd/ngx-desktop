
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NotionDatabaseItem, NotionService } from "@modules/notion/services/notion.service";
import { Observable } from 'rxjs';
import { NotionDatabaseItemComponent } from '../notion-database-item/notion-database-item.component';
import { NotionPageComponent } from '../notion-page/notion-page.component';

@Component({
  selector: 'bm-notion',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgClass, NgIf, JsonPipe, NotionDatabaseItemComponent, MatIconModule, NotionPageComponent],
  templateUrl: './notion.component.html',
  styleUrl: './notion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-full w-full gap-5 relative p-2 lg:px-6 py-6'
  }
})
export class NotionComponent {

  selectedItem: undefined | NotionDatabaseItem;
  private notionService: NotionService = inject(NotionService);

  notionPageItems$: Observable<NotionDatabaseItem[]> = this.notionService.getTableItems();

  setItemSelected(item: NotionDatabaseItem) {
    this.selectedItem = item;
  }
}
