import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, effect, inject, input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NotionService } from '@modules/notion/services/notion.service';
import { finalize } from 'rxjs';
import { NotionBlock, NotionDatabaseItem } from '../../types/notion.interface';
import { NotionBadgeStatusComponent } from '../notion-badge-status/notion-badge-status.component';
import { NotionBlockComponent } from '../notion-block/notion-block.component';
import { NotionItemTagsComponent } from "../notion-item-tags/notion-item-tags.component";
import { NotionPageHeaderComponent } from '../notion-page-header/notion-page-header.component';
import { NotionTableOfContentsComponent } from "../notion-table-of-contents/notion-table-of-contents.component";

@Component({
  selector: 'bm-notion-page',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NotionBlockComponent,
    CommonModule,
    NotionPageHeaderComponent,
    NotionTableOfContentsComponent,
  ],
  templateUrl: './notion-page.component.html',
  styleUrl: './notion-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col max-w-5xl'
  }
})
export class NotionPageComponent implements OnChanges {


  private destroyRef = inject(DestroyRef);
  private notionService: NotionService = inject(NotionService);
  private cdr = inject(ChangeDetectorRef);

  public item = input.required<NotionDatabaseItem>();
  public notionBlocks = signal<NotionBlock[]>([])
  public iconPage = signal<string | undefined>(undefined)

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.loadPageElements();
    }

  }
  loadPageElements() {

    this.notionService.getPageElements(this.item().id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((blocks) => {
        this.notionBlocks.set(blocks);
        if (this.notionBlocks().find((block) => block.type === 'page')) {
          const pageBlock = this.notionBlocks().find((block) => block.type === 'page') as NotionBlock;
          this.iconPage.set(pageBlock.format?.page_icon);
        }
        this.cdr.markForCheck();
      });
  }

  getchildContent(id: string): NotionBlock {
    return this.notionBlocks().find(block => block.id === id) as NotionBlock;

  }
  scrollToBlock(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
