import { VirtualGridComponent } from '@ui/virtual-grid/virtual-grid.component';
import { Component, inject } from '@angular/core';
import { TasksbarComponent } from '../tasksbar/tasksbar.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { GridBreakpoint, LayoutService } from 'app/shared/services/layout.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'bm-desktop',
  standalone: true,
  imports: [TasksbarComponent, VirtualGridComponent, NgClass, AsyncPipe],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {


  layoutService = inject(LayoutService);
  wallPaperClass$!: Observable<string>
  layout: any = [{
    id: '0',
    x: 0,
    y: 0,
    w: 1,
    h: 1,
  }]

  constructor() {
    this.wallPaperClass$ = this.layoutService.gridBreakpointValue().pipe(
      map((value) => {
        if (
          value === GridBreakpoint.XSmall) {
          return 'wallpaper-mobile';
        }
        return 'wallpaper-desktop';
      })
    )
  }



}
