import { Component, Input } from '@angular/core';
import { NotionDatabaseItem } from '@modules/notion/types/notion.interface';
import { BadgeDirective } from 'app/shared/directives/badge.directive';

@Component({
    selector: 'bm-notion-item-tags',
    imports: [ BadgeDirective],
    templateUrl: './notion-item-tags.component.html',
    styleUrl: './notion-item-tags.component.scss'
})
export class NotionItemTagsComponent {

  @Input() justify: 'start' | 'center' | 'between' | 'end' | 'align' = 'end'
  @Input() tags!: NotionDatabaseItem['tags']

}
