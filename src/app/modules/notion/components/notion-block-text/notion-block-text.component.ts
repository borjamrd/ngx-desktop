import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
import { NotionBlock } from "../../types/notion.interface";

@Component({
  selector: 'bm-notion-block-text',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './notion-block-text.component.html',
  styleUrl: './notion-block-text.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotionBlockTextComponent implements OnInit {

  @Input() notionBlock!: NotionBlock
  ngOnInit(): void { }

}
