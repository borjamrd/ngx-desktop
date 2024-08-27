import { Component, Input, OnInit } from '@angular/core';
import { NotionBlock } from '../../types/notion.interface';
import { getBlockImageURL } from 'app/shared/utils/utils';

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

  getImage() {
    // const url = new URL(
    //   `https://www.notion.so/image/${encodeURIComponent(this.notionBlock.properties.source[0][0])}`

    // );
    // if (this.notionBlock) {
    //   const table =
    //     this.notionBlock.parent_table === "space" ? "block" : this.notionBlock.parent_table;
    //   url.searchParams.set("table", table);
    //   url.searchParams.set("id", this.notionBlock.id);
    //   url.searchParams.set("cache", "v2");
    // }
    // console.log(url.toString())
    // return url.toString();
  }


}
