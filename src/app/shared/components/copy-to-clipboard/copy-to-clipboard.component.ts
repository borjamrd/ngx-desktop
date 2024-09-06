import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bm-copy-to-clipboard',
  standalone: true,
  imports: [ClipboardModule, MatIconModule],
  templateUrl: './copy-to-clipboard.component.html',
  styleUrl: './copy-to-clipboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex gap-2 px-2 py-1 w-fit bg-slate-100 dark:bg-slate-100/20 dark:text-white text-slate-800 items-center rounded-md cursor-pointer active:animate-button-pop',
    '(click)': 'copyToClipboard()',
  }
})
export class CopyToClipboardComponent {

  public copied = signal<boolean>(false)
  public displayText = input<string>();
  public value = input.required<string>()
  public hideText = input<boolean>(false)

  private clipboard = inject(Clipboard)

  async copyToClipboard() {
    this.clipboard.copy(this.value())
    this.copied.set(true)
    setTimeout(() => {
      this.copied.set(false)
    }, 2000)
  }


}
