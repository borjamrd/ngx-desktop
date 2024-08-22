import { NotionService } from 'app/shared/services/notion-posts.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { NotionDatabaseItemComponent } from '../notion-database-item/notion-database-item.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bm-notion',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NotionDatabaseItemComponent, MatIconModule],
  templateUrl: './notion.component.html',
  styleUrl: './notion.component.scss'
})
export class NotionComponent {

  private notionService: NotionService = inject(NotionService);

  notionPageItems$: Observable<any> = this.notionService.getPosts().pipe(delay(4000));
}
