import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CopyToClipboardComponent } from "@components/copy-to-clipboard/copy-to-clipboard.component";
import { BadgeDirective } from 'app/shared/directives/badge.directive';
import { HighlightAuto } from 'ngx-highlightjs';
import { NotionBlock } from '../../types/notion.interface';

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
