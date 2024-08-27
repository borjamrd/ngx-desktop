import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotionDatabaseItem } from "@modules/notion/services/notion.service";
import { NotionBadgeStatusComponent } from '../notion-badge-status/notion-badge-status.component';
import { NotionItemTagsComponent } from '../notion-item-tags/notion-item-tags.component';

@Component({
  selector: 'bm-notion-database-item',
  standalone: true,
  imports: [NgClass, NotionBadgeStatusComponent, NotionItemTagsComponent],
  templateUrl: './notion-database-item.component.html',
  styleUrl: './notion-database-item.component.scss'
})
export class NotionDatabaseItemComponent {

  @Input() item!: NotionDatabaseItem
  @Output() itemSelected = new EventEmitter<NotionDatabaseItem>()


}
