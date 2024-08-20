import { Component } from '@angular/core';
import { DesktopWidgetComponent } from '../desktop-widget/desktop-widget.component';

@Component({
  selector: 'bm-spotify-widget',
  standalone: true,
  imports: [],
  templateUrl: './spotify-widget.component.html',
  styleUrl: './spotify-widget.component.scss',
})
export class SpotifyWidgetComponent extends DesktopWidgetComponent {

  constructor() {
    super();
  }
}
