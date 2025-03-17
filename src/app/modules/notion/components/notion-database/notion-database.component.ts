import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NotionService } from '../../services/notion.service';
import { NotionDatabaseItem } from '../../types/notion.interface';
import { NotionDatabaseItemComponent } from '../notion-database-item/notion-database-item.component';

@Component({
    selector: 'bm-notion-database',
    imports: [CommonModule, NotionDatabaseItemComponent, MatIconModule],
    templateUrl: './notion-database.component.html',
    styleUrl: './notion-database.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'w-full overflow-auto sticky top-0',
    },
})
export class NotionDatabaseComponent {
    public itemSelected = output<NotionDatabaseItem>();
    private notionService = inject(NotionService);
    public tableItemsQuery = this.notionService.tableItemsResource;

    public prefetchPageElements(id: string) {
        this.notionService.prefetchPageElements(id);
    }
}
