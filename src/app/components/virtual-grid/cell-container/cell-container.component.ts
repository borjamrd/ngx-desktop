import { Component, EventEmitter, inject, Injector, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { SystemElement } from 'app/shared/types/system-element.type';
import { from } from 'rxjs';
import { WindowContainerComponent } from '../../window-container/window-container.component';
import { NgClass, NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { NotionContainerComponent } from 'app/components/notion-container/notion-container.component';
import { MediumContainerComponent } from 'app/components/medium-container/medium-container.component';
import { SystemElementIconComponent } from 'app/components/system-element-icon/system-element-icon.component';
import { DisplayElementWindowService } from 'app/shared/services/display-element-window.service';

@Component({
  selector: 'bm-cell-container',
  standalone: true,
  imports: [NgClass, NgComponentOutlet, NgTemplateOutlet, SystemElementIconComponent],
  templateUrl: './cell-container.component.html',
  styleUrl: './cell-container.component.scss',
})

export class CellContainerComponent {

  private injector: Injector = inject(Injector);

  @Input() element!: SystemElement;
  @Input() parentIsDesktop: boolean = false;
  @Output() onRightClick = new EventEmitter<SystemElement['type']>();
  @Output() onDoubleClick = new EventEmitter<SystemElement['type']>();

  private readonly displayElementWindowService: DisplayElementWindowService = inject(DisplayElementWindowService);

  onRightClickGridItem(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    alert('alert child');
  }


  open(element: SystemElement) {
    this.displayElementWindowService.open(element)
  }


  customInjector(element: SystemElement) {
    return Injector.create({ providers: [{ provide: 'layout', useValue: [], }], parent: this.injector });
  }

}
