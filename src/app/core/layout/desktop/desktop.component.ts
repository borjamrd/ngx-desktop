import { VirtualGridComponent } from '@ui/virtual-grid/virtual-grid.component';
import { Component } from '@angular/core';
import { TasksbarComponent } from '../tasksbar/tasksbar.component';

@Component({
  selector: 'bm-desktop',
  standalone: true,
  imports: [TasksbarComponent, VirtualGridComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {}
