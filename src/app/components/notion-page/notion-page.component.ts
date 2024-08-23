import { JsonPipe } from '@angular/common';
import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotionDatabaseItem, NotionService } from 'app/shared/services/notion.service';

@Component({
  selector: 'bm-notion-page',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './notion-page.component.html',
  styleUrl: './notion-page.component.scss'
})
export class NotionPageComponent implements OnChanges {

  private notionService: NotionService = inject(NotionService);
  @Input() item!: NotionDatabaseItem

  itemContent: any;
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['item']) {
      this.loadPageElements();
    }

  }
  loadPageElements() {
    this.notionService.getPageElements(this.item.id).subscribe((data) => {
      this.itemContent = data;
    });
  }
}
