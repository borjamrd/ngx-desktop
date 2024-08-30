
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, ElementRef, inject, signal, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { NotionService } from "@modules/notion/services/notion.service";
import { ResizeObserverService } from 'app/shared/services/resize-observer.service';
import { Observable } from 'rxjs';
import { NotionDatabaseItem } from '../../types/notion.interface';
import { NotionDatabaseItemComponent } from '../notion-database-item/notion-database-item.component';
import { NotionPageComponent } from '../notion-page/notion-page.component';

@Component({
  selector: 'bm-notion',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgClass, NgIf, JsonPipe, NotionDatabaseItemComponent, MatIconModule, NotionPageComponent],
  templateUrl: './notion.component.html',
  providers: [ResizeObserverService],
  styleUrl: './notion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-full w-full gap-20 relative justify-center',
  },
  encapsulation: ViewEncapsulation.None
})
export class NotionComponent {
  notionContainerClass = signal<string>('p-5')

  mediaQueries = {
    XXS: 250,
    XS: 599,
    SM: 959,
    MD: 1279,
    LG: 1919,
    XL: 1920
  }


  private notionService: NotionService = inject(NotionService);
  public notionPageItems$: Observable<NotionDatabaseItem[]> = this.notionService.getTableItems();
  public selectedItem = signal<undefined | NotionDatabaseItem>(undefined)
  private elementRef = inject(ElementRef)
  private destroyRef = inject(DestroyRef)


  setItemSelected(item: NotionDatabaseItem) {
    this.selectedItem.set(item)
  }
  private crd = inject(ChangeDetectorRef)
  containeListClasses: string = ''
  pageListCLasses: string = ''

  ngAfterViewInit() {

    const container = new ResizeObserverService(this.crd, this.elementRef);
    container.onResize.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((entry) => {
      if (entry.target.clientWidth < this.mediaQueries.XXS) {
        this.containeListClasses = 'hidden'

        this.notionContainerClass.set('px-2 ')
        this.pageListCLasses = 'w-full h-full overflow-auto'
        this.notionContainerClass.set('min-w-fit-content')
      } else if (entry.target.clientWidth < this.mediaQueries.XS) {
        this.containeListClasses = 'hidden'
        this.pageListCLasses = 'w-full overflow-auto'
        this.notionContainerClass.set('min-w-fit-content')

        this.notionContainerClass.set('px-5')
      } else if (entry.target.clientWidth < this.mediaQueries.SM) {
        this.containeListClasses = 'hidden'
        this.pageListCLasses = 'w-full overflow-auto'
        this.notionContainerClass.set('min-w-fit-content')

      }
      else if (entry.target.clientWidth < this.mediaQueries.MD) {
        this.containeListClasses = 'block w-2/5'
        this.notionContainerClass.set('min-w-[50rem]')
        this.pageListCLasses = 'w-full hoverflow-auto'

      }
      else if (entry.target.clientWidth < this.mediaQueries.LG) {
        this.containeListClasses = 'block w-2/5'
        this.notionContainerClass.set('min-w-[65rem]')
        this.pageListCLasses = 'w-3/5 overflow-auto'

      }
      else if (entry.target.clientWidth < this.mediaQueries.XL) {
        this.containeListClasses = 'block w-2/5'
        this.pageListCLasses = 'w-3/5 overflow-auto'
        this.notionContainerClass.set('min-w-[75rem]')

      }


    })

  }
}
