import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotionDatabaseItem } from '@modules/notion/services/notion.service';

@Component({
  selector: 'bm-notion-item-tags',
  standalone: true,
  imports: [NgClass],
  templateUrl: './notion-item-tags.component.html',
  styleUrl: './notion-item-tags.component.scss'
})
export class NotionItemTagsComponent {

  @Input() justify: 'start' | 'center' | 'between' | 'end' | 'align' = 'end'

  @Input() tags!: NotionDatabaseItem['tags']

}
