import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotionBlock } from '../../types/notion.interface';
import { NotionBlockCodeComponent } from "../notion-block-code/notion-block-code.component";
import { NotionBlockImageComponent } from "../notion-block-image/notion-block-image.component";

@Component({
  selector: 'bm-notion-block',
  standalone: true,
  imports: [CommonModule, NotionBlockCodeComponent, NotionBlockImageComponent],
  templateUrl: './notion-block.component.html',
  styleUrl: './notion-block.component.scss'
})
export class NotionBlockComponent implements OnInit {

  @Input() notionBlock!: NotionBlock
  @Input() previousBlockType!: NotionBlock['type']

  numberedListPosition = 1

  ngOnInit(): void {
    if (this.notionBlock.type === 'numbered_list' && this.previousBlockType === 'numbered_list') {
      this.numberedListPosition = this.numberedListPosition + 1
    } else {
      this.numberedListPosition = 1
    }
  }


}
