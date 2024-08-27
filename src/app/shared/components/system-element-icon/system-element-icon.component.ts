import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bm-system-element-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './system-element-icon.component.html',
  styleUrl: './system-element-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemElementIconComponent {

  public icon = input.required<string>();
}
