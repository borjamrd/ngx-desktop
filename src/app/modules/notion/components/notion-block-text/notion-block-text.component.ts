import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NotionBlock } from "../../types/notion.interface";

@Component({
    selector: 'bm-notion-block-text',
    imports: [
        CommonModule,
    ],
    templateUrl: './notion-block-text.component.html',
    styleUrl: './notion-block-text.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotionBlockTextComponent {

  @Input() notionBlock!: NotionBlock


}
