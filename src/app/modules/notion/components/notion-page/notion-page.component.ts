import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, Input, OnChanges, SimpleChanges } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NotionDatabaseItem, NotionService } from '@modules/notion/services/notion.service';
import { finalize } from 'rxjs';
import { NotionBlock } from '../../types/notion.interface';
import { NotionBadgeStatusComponent } from '../notion-badge-status/notion-badge-status.component';
import { NotionBlockComponent } from '../notion-block/notion-block.component';
import { NotionItemTagsComponent } from "../notion-item-tags/notion-item-tags.component";

@Component({
  selector: 'bm-notion-page',
  standalone: true,
  imports: [CommonModule, NotionBlockComponent, NgTemplateOutlet, NotionBadgeStatusComponent, NotionItemTagsComponent],
  templateUrl: './notion-page.component.html',
  styleUrl: './notion-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionPageComponent implements OnChanges {


  private destroyRef = inject(DestroyRef);
  private notionService: NotionService = inject(NotionService);
  private cdr = inject(ChangeDetectorRef);

  public item = input.required<NotionDatabaseItem>();
  public loading = true;
  public notionBlocks: NotionBlock[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.loadPageElements();
    }

  }
  loadPageElements() {

    this.loading = true;
    this.notionService.getPageElements(this.item().id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((blocks) => {
        this.notionBlocks = blocks;
        this.cdr.markForCheck();
      });
  }

  getchildContent(id: string): NotionBlock {
    return this.notionBlocks.find(block => block.id === id) as NotionBlock;

  }
}
