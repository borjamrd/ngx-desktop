import { Component } from '@angular/core';
import { DesktopWidgetComponent } from '../desktop-widget/desktop-widget.component';
import { MatIconModule } from '@angular/material/icon';


interface Artist {
  name: string;
}

interface Track {
  name: string;
  artists: Artist[];
  album: string;
  image: string;
}
@Component({
  selector: 'bm-spotify-widget',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './spotify-widget.component.html',
  styleUrl: './spotify-widget.component.scss',
})
export class SpotifyWidgetComponent extends DesktopWidgetComponent {

  isPlaying = false;
  track: Track = {
    name: 'I wanna be yours',
    artists: [{ name: 'Artic Monkeys' }],
    album: 'This is Artic Monkeys',
    image: 'assets/images/artic_monkeys.jpg',
  };
  constructor() {
    super();
  }

  previousTrack() {

  }
  togglePlay() {

  }
  nextTrack() {
  }
}
