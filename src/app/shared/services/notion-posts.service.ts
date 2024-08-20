import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotionPostsService {

  private http: HttpClient = inject(HttpClient);
  constructor() { }

  getPosts() {
    return this.http.get('https://notion-api.splitbee.io/v1/table/e9c95945794e462d92fe07e34d26b368');
  }
}
