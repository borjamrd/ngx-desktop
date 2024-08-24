import { CommonModule, NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NotionDatabaseItem, NotionService } from 'app/shared/services/notion.service';
import { NotionBlock } from './notion.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { NotionBlockComponent } from '../notion-block/notion-block.component';
import { NotionBadgeStatusComponent } from '../notion-badge-status/notion-badge-status.component';
import { NotionItemTagsComponent } from "../notion-item-tags/notion-item-tags.component";

@Component({
  selector: 'bm-notion-page',
  standalone: true,
  imports: [CommonModule, NotionBlockComponent, NgTemplateOutlet, NotionBadgeStatusComponent, NotionItemTagsComponent],
  templateUrl: './notion-page.component.html',
  styleUrl: './notion-page.component.scss'
})
export class NotionPageComponent implements OnChanges {

  private notionService: NotionService = inject(NotionService);
  @Input() item!: NotionDatabaseItem
  private destroyRef = inject(DestroyRef);
  notionBlocks: NotionBlock[] = [];
  loading = true;
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['item']) {
      console.log(this.item)
      this.loadPageElements();
    }

  }
  loadPageElements() {

    this.loading = true;
    this.notionService.getPageElements(this.item.id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading = false)
      )
      .subscribe((blocks) => {
        this.notionBlocks = blocks;
      });
  }

  getchildContent(id: string): NotionBlock {
    return this.notionBlocks.find(block => block.id === id) as NotionBlock;

  }
}
