import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { NotionDatabaseItem } from "@modules/notion/services/notion.service";
import { NotionBadgeStatusComponent } from '../notion-badge-status/notion-badge-status.component';
import { NotionItemTagsComponent } from '../notion-item-tags/notion-item-tags.component';

@Component({
  selector: 'bm-notion-database-item',
  standalone: true,
  imports: [NgClass, NotionBadgeStatusComponent, NotionItemTagsComponent],
  templateUrl: './notion-database-item.component.html',
  styleUrl: './notion-database-item.component.scss',
  host: {
    '(click)': 'itemSelected.emit(item)',
    class: 'dark:hover:bg-neutral-600/50 hover:bg-neutral-100/50 px-2 py-1 rounded-md flex justify-between cursor-pointer items-baseline'
  }
})
export class NotionDatabaseItemComponent {


  public item = input.required<NotionDatabaseItem>()
  public itemSelected = output<NotionDatabaseItem>()


}
