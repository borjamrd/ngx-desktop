import { AsyncPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { VirtualGridComponent } from '@ui/virtual-grid/virtual-grid.component';
import { defaultLayout, SystemElement } from 'app/shared/types/system-element.type';
import { TasksbarComponent } from '../tasksbar/tasksbar.component';

@Component({
  selector: 'bm-desktop',
  standalone: true,
  imports: [TasksbarComponent, VirtualGridComponent, NgClass, AsyncPipe],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {

  layout: SystemElement[] = defaultLayout


}
