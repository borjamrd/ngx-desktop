import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    input,
    OnChanges,
    signal,
    SimpleChanges,
} from '@angular/core';
import { NotionService } from '@modules/notion/services/notion.service';
import { NotionBlock, NotionDatabaseItem } from '../../types/notion.interface';
import { NotionBlockComponent } from '../notion-block/notion-block.component';
import { NotionPageHeaderComponent } from '../notion-page-header/notion-page-header.component';
import { NotionTableOfContentsComponent } from '../notion-table-of-contents/notion-table-of-contents.component';

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
        class: 'flex flex-col max-w-5xl',
    },
})
export class NotionPageComponent implements OnChanges {
    private notionService: NotionService = inject(NotionService);

    public item = input.required<NotionDatabaseItem>();
    public iconPage = signal<string | undefined>(undefined);
    public notionBlocksQuery = this.notionService.pageElementsResource;
    private cdr = inject(ChangeDetectorRef);

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['item']) {
            this.notionService.setId(this.item().id);
        }
    }

    getchildContent(id: string): NotionBlock {
        return this.notionBlocksQuery
            .value()!
            .find((block) => block.id === id) as NotionBlock;
    }
    scrollToBlock(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            this.cdr.detectChanges();
        }
    }
}
