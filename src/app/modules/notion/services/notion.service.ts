import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, resource } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NotionBlock, NotionDatabaseItem } from '../types/notion.interface';

@Injectable({
    providedIn: 'root',
})
export class NotionService {
    private http: HttpClient = inject(HttpClient);
    private DEFAULT_STALE_TIME = 1000 * 6 * 5;

    // Signal para el id. Puedes actualizarlo desde el componente
    private id = signal<string | undefined>(undefined);

    public setId(id: string) {
        this.id.set(id);
        // Puedes recargar el recurso si es necesario
        this.pageElementsResource.reload();
    }

    // Recurso para obtener los items de la tabla
    public tableItemsResource = resource({
        request: () => ({}),
        loader: async ({ abortSignal }) => {
            // Utilizamos abortSignal para poder abortar la petición si cambia el request
            const data = await lastValueFrom(
                this.http.get<NotionDatabaseItem[]>(
                    'https://notion-api.splitbee.io/v1/table/e9c95945794e462d92fe07e34d26b368'
                )
            );
            return data;
        },
    });

    // Recurso para obtener los elementos de una página, basado en el id
    public pageElementsResource = resource({
        request: () => ({ id: this.id() }),
        loader: async ({ request, abortSignal }) => {
            if (!request.id) {
                throw new Error('ID no definido');
            }
            const data = await lastValueFrom(
                this.http.get<Map<string, any>>(
                    `https://notion-api.splitbee.io/v1/page/${request.id}`
                )
            );
            const blocks: NotionBlock[] = [];
            Object.values(data).forEach(
                (item: { value: NotionBlock; role: string }) => {
                    blocks.push(item.value);
                }
            );
            return blocks;
        },
    });

    public prefetchPageElements(id: string): void {
        this.setId(id);
        this.pageElementsResource.reload();
    }
}
