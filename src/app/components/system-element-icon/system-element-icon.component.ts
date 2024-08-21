import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bm-system-element-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './system-element-icon.component.html',
  styleUrl: './system-element-icon.component.scss'
})
export class SystemElementIconComponent {

  @Input() icon!: string;
}
