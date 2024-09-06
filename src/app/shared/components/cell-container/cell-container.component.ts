import { NgClass, NgComponentOutlet, NgTemplateOutlet, SlicePipe } from '@angular/common';
import { Component, inject, Injector, input, output, signal, ViewChild, viewChild } from '@angular/core';
import { DisplayElementWindowService } from 'app/shared/services/display-element-window.service';
import { SystemElement } from 'app/shared/types/system-element.type';
import { SystemElementIconComponent } from '../system-element-icon/system-element-icon.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { ElementOptionsComponent } from '../element-options/element-options.component';

@Component({
  selector: 'bm-cell-container',
  standalone: true,
  imports: [
    SlicePipe,
    SystemElementIconComponent,
    NgTemplateOutlet,
    NgComponentOutlet,
    NgClass,
    MatMenuModule,
    ElementOptionsComponent,
  ],
  templateUrl: './cell-container.component.html',
  styleUrl: './cell-container.component.scss',
  host: {
    class: 'w-full h-full flex items-baseline justify-center'
  }
})

export class CellContainerComponent {

  private injector: Injector = inject(Injector);
  private readonly displayElementWindowService = inject(DisplayElementWindowService);
  public element = input.required<SystemElement>();

  public showFullName = signal<boolean>(false);
  public onDoubleClick = output<SystemElement['type']>();
  public onRightClick = output<SystemElement['type']>();
  public parentIsDesktop = input<boolean>(false);

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  contextMenuPosition = { x: '3rem', y: '3rem' };


  onRightClickGridItem(event: MouseEvent, element: SystemElement): void {
    event.preventDefault();
    //    event.stopPropagation();

    this.trigger.menuData = { 'element': element };
    this.trigger.menu!.focusFirstItem('mouse');
    this.trigger.openMenu();
  }


  open(element: SystemElement) {
    this.displayElementWindowService.open(element)
  }


  customInjector(element: SystemElement) {
    return Injector.create({ providers: [{ provide: 'layout', useValue: [], }], parent: this.injector });
  }
  handleFullName() {
    this.showFullName.set(true)
    setTimeout(() => {
      this.showFullName.set(false)
    }, 4000);
  }
}
