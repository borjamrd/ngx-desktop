import { Component, Input, OnInit } from '@angular/core';
import { NotionBlock } from '../../types/notion.interface';
import { getBlockImageURL } from '../../utils/notion.utils';

@Component({
  selector: 'bm-notion-block-image',
  standalone: true,
  imports: [],
  templateUrl: './notion-block-image.component.html',
  styleUrl: './notion-block-image.component.scss'
})
export class NotionBlockImageComponent implements OnInit {

  @Input() notionBlock!: NotionBlock
  imgSrc!: string;
  ngOnInit(): void {
    if (this.notionBlock.properties && this.notionBlock.properties.source) {
      this.imgSrc = getBlockImageURL(this.notionBlock.properties.source[0][0], this.notionBlock)
    }
  }

}
