import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
export interface Enclosure {
}

interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}
interface MediumResponse {
  status: string;
  feed: Feed;
  items: MediumPost[];
}

export interface MediumPost {
  title: string;
  pubDate: Date;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Enclosure;
  categories: string[];
}
@Injectable({
  providedIn: 'root'
})
export class MediumService {

  private http: HttpClient = inject(HttpClient);
  constructor() { }

  getPosts(account: string) {
    return this.http.get<MediumResponse>(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${account}`)
      .pipe(
        delay(500),
        map((data) => {
          return data.items
        }));
  }
}
