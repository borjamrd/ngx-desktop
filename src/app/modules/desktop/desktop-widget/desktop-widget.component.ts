import { Component } from '@angular/core';
import { ElementType } from 'app/shared/types/system-element.type';
@Component({
    selector: 'bm-desktop-widget',
    imports: [],
    templateUrl: './desktop-widget.component.html',
    styleUrl: './desktop-widget.component.scss'
})
export abstract class DesktopWidgetComponent {
  id: string = 'desktop-widget';
  type: ElementType.DESKTOP_WIDGET = ElementType.DESKTOP_WIDGET;

}

