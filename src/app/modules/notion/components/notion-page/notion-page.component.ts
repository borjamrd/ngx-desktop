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


  private notionService: NotionService = inject(NotionService);

  public item = input.required<NotionDatabaseItem>();
  public iconPage = signal<string | undefined>(undefined)
  public notionBlocksQuery = this.notionService.pageElementsQuery;
  private cdr = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.notionService.setId(this.item().id)
    }
  }



  getchildContent(id: string): NotionBlock {
    return this.notionBlocksQuery.data()!.find(block => block.id === id) as NotionBlock;

  }
  scrollToBlock(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.cdr.detectChanges();
    }
  }
}
