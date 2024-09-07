import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { SystemElement } from "app/shared/types/system-element.type";
import { CopyToClipboardComponent } from "../copy-to-clipboard/copy-to-clipboard.component";
import { DisplayElementDialogService } from "app/shared/services/display-element-dialog.service";
import { FileExplorerService } from "app/shared/services/file-explorer.service";

@Component({
  selector: 'bm-element-options',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    CopyToClipboardComponent
  ],
  templateUrl: './element-options.component.html',
  styleUrl: './element-options.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ElementOptionsComponent {
  public element = input.required<SystemElement>();
  private readonly displayElementWindowService = inject(DisplayElementDialogService);
  private readonly fileExplorerService = inject(FileExplorerService);

  openElement() {
    this.displayElementWindowService.open(this.element());
  }

  addToFavorites(element: SystemElement) {
    this.fileExplorerService.addToFavorites(element);
  }
  removeFromFavorites(element: SystemElement) {
    this.fileExplorerService.removeFromFavorites(element);
  }
  isFavorite(element: SystemElement) {
    return this.fileExplorerService.favorites().some((favorite) => favorite.id === element.id);
  }
  removeElement(id: string) {
    this.fileExplorerService.removeElement(id);
  }
}
