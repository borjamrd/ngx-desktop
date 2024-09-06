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
  host: {
    class: 'h-full w-full relative bg-gradient-to-bl from-slate-900 to-[#1db954] rounded-2xl p-2 lg:p-4 bg-opacity-90 backdrop:blur-sm text-white'
  },
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
