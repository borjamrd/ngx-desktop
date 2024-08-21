import { Component, Input, signal } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bm-copy-to-clipboard',
  standalone: true,
  imports: [ClipboardModule, MatIconModule],
  templateUrl: './copy-to-clipboard.component.html',
  styleUrl: './copy-to-clipboard.component.scss'
})
export class CopyToClipboardComponent {

  copied = signal<boolean>(false)
  @Input() text!: string;

  async copyToClipboard() {
    this.copied.set(true)
    setTimeout(() => {
      this.copied.set(false)
    }, 2000)
  }


}
