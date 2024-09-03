import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NotionDatabaseItem } from "../../types/notion.interface";
import { NotionDatabaseItemComponent } from "../notion-database-item/notion-database-item.component";

@Component({
  selector: 'bm-notion-database',
  standalone: true,
  imports: [
    CommonModule,
    NotionDatabaseItemComponent
  ],
  templateUrl: './notion-database.component.html',
  styleUrl: './notion-database.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full overflow-auto sticky top-0'
  }
})
export class NotionDatabaseComponent {

  public itemSelected = output<NotionDatabaseItem>()
  public items = input.required<NotionDatabaseItem[]>()
}
