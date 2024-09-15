import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { NotionBlock, NotionDatabaseItem } from '../types/notion.interface';



@Injectable({
  providedIn: 'root'
})
export class NotionService {

  private queryClient = injectQueryClient()
  private DEFAULT_STALE_TIME = 1000 * 6 * 5
  private http: HttpClient = inject(HttpClient);
  private id = signal<string | undefined>(undefined)

  public setId(id: string) {
    this.id.set(id)
  }

  public tableItemsQuery = injectQuery(() => ({
    queryKey: ['tableItems'],
    queryFn: () => this.getTableItems(),
    staleTime: this.DEFAULT_STALE_TIME
  }))


  public prefetchPageElements(id: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['pageElements', id],
      queryFn: () => this.getPageElements(id),
      staleTime: this.DEFAULT_STALE_TIME
    })
  }


  public pageElementsQuery = injectQuery(() => ({
    queryKey: ['pageElements', this.id()],
    queryFn: () => this.getPageElements(this.id()!),
    enabled: () => !!this.id(),
    staleTime: this.DEFAULT_STALE_TIME
  }))




  private getTableItems() {
    return lastValueFrom(this.http.get<NotionDatabaseItem[]>('https://notion-api.splitbee.io/v1/table/e9c95945794e462d92fe07e34d26b368'))
  }
  private async getPageElements(id: string) {
    return lastValueFrom(this.http.get<Map<string, any>>(`https://notion-api.splitbee.io/v1/page/${id}`))
      .then((data: Object) => {
        let blocks: NotionBlock[] = [];
        Object.values(data).forEach((key: { value: NotionBlock, role: string }) => {
          blocks.push(key.value)
        });

        return blocks;
      })


  }
}
