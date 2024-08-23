import { Component, Input } from '@angular/core';
import { NotionBlock } from '../notion-page/notion.interface';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'bm-notion-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notion-block.component.html',
  styleUrl: './notion-block.component.scss'
})
export class NotionBlockComponent {

  @Input() notionBlock!: NotionBlock

}
