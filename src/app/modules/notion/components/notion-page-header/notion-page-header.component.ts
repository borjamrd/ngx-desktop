import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NotionDatabaseItem } from "../../types/notion.interface";
import { NotionBadgeStatusComponent } from "../notion-badge-status/notion-badge-status.component";
import { NotionItemTagsComponent } from "../notion-item-tags/notion-item-tags.component";

@Component({
    selector: 'bm-notion-page-header',
    imports: [
        CommonModule,
        NotionBadgeStatusComponent,
        NotionItemTagsComponent
    ],
    templateUrl: './notion-page-header.component.html',
    styleUrl: './notion-page-header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotionPageHeaderComponent {

  public item = input.required<NotionDatabaseItem>({});
  public iconPage = input<string | undefined>(undefined)


}
