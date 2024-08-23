import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';


export interface NotionDatabaseItem {
  id: string;
  name: string;
  tags: string[];
  date: string;
  description: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class NotionService {

  private http: HttpClient = inject(HttpClient);
  constructor() { }

  getPosts() {
    return this.http.get<NotionDatabaseItem[]>('https://notion-api.splitbee.io/v1/table/e9c95945794e462d92fe07e34d26b368').pipe(tap((data) => console.log(data)));
  }
}
