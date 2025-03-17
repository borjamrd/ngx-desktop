import { Component, input, output } from '@angular/core';
import { NotionDatabaseItem } from "@modules/notion/types/notion.interface";
import { NotionBadgeStatusComponent } from '../notion-badge-status/notion-badge-status.component';
import { NotionItemTagsComponent } from '../notion-item-tags/notion-item-tags.component';

@Component({
    selector: 'bm-notion-database-item',
    imports: [ NotionBadgeStatusComponent, NotionItemTagsComponent],
    templateUrl: './notion-database-item.component.html',
    styleUrl: './notion-database-item.component.scss',
    host: {
        '(mouseenter)': 'prefetchPageElements.emit(item().id)',
        '(click)': 'itemSelected.emit(this.item())',
        class: 'dark:hover:bg-neutral-600/50 hover:bg-neutral-100/50 px-2 py-1 rounded-md flex justify-between cursor-pointer items-baseline gap-2'
    }
})
export class NotionDatabaseItemComponent {

  public prefetchPageElements = output<string>()

  public item = input.required<NotionDatabaseItem>()
  public itemSelected = output<NotionDatabaseItem>()


}
