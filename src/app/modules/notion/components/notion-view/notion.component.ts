
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NotionService } from "@modules/notion/services/notion.service";
import { Observable } from 'rxjs';
import { NotionDatabaseItem } from '../../types/notion.interface';
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

  private notionService: NotionService = inject(NotionService);
  public notionPageItems$: Observable<NotionDatabaseItem[]> = this.notionService.getTableItems();
  public selectedItem = signal<undefined | NotionDatabaseItem>(undefined)

  setItemSelected(item: NotionDatabaseItem) {
    this.selectedItem.set(item)
  }
}
