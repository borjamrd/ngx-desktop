import { Component, inject, Input, OnInit } from '@angular/core';
import { NotionBlock } from '../notion-page/notion.interface';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { CopyToClipboardComponent } from '../ui/copy-to-clipboard/copy-to-clipboard.component';
import { BadgeDirective } from 'app/directives/badge.directive';

@Component({
  selector: 'bm-notion-block-code',
  standalone: true,
  imports: [HighlightAuto, CopyToClipboardComponent, BadgeDirective],
  templateUrl: './notion-block-code.component.html',
  styleUrl: './notion-block-code.component.scss'
})
export class NotionBlockCodeComponent implements OnInit {

  codeForHighlight: string = ''
  languange: string = ''

  private clipboard: Clipboard = inject(Clipboard)
  @Input() notionBlock!: NotionBlock


  ngOnInit(): void {
    if (this.notionBlock.properties?.language) {
      this.languange = this.notionBlock.properties.language[0][0]
      this.codeForHighlight = this.notionBlock.properties.title[0][0]
    }


  }
  copy() {
    this.clipboard.copy(this.codeForHighlight)
  }
}
