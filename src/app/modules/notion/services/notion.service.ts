import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NotionBlock, NotionDatabaseItem } from '../types/notion.interface';
import { map, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NotionService {

  private http: HttpClient = inject(HttpClient);
  constructor() { }

  getTableItems() {
    return this.http.get<NotionDatabaseItem[]>('https://notion-api.splitbee.io/v1/table/e9c95945794e462d92fe07e34d26b368')
  }

  getPageElements(id: string) {
    return this.http.get<Map<string, any>>(`https://notion-api.splitbee.io/v1/page/${id}`)
      .pipe(
        map((data: Object) => {
          let blocks: NotionBlock[] = [];
          Object.values(data).forEach((key: { value: NotionBlock, role: string }) => {
            blocks.push(key.value)
          });
          console.log(blocks)
          return blocks;
        })

      )


  }
}
