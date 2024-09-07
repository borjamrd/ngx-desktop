import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { SystemElementIconComponent } from "app/shared/components/system-element-icon/system-element-icon.component";
import { FocusDialogDirective } from "app/shared/directives/focus-dialog.directive";
import { DisplayElementDialogService } from "app/shared/services/display-element-dialog.service";
import { FileExplorerService } from "app/shared/services/file-explorer.service";
import { SystemElement } from "app/shared/types/system-element.type";
import { flattenElements } from "app/shared/utils";

@Component({
  selector: 'bm-global-search-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FocusDialogDirective
  ],
  templateUrl: './global-search-dialog.component.html',
  styleUrl: './global-search-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-full flex flex-col p-4',
  }
})
export class GlobalSearchDialogComponent {
  public dialogRef: MatDialogRef<GlobalSearchDialogComponent> = inject(MatDialogRef);

  private fileExplorerService = inject(FileExplorerService);
  private elements = this.fileExplorerService._systemFiles()[0].children![0].children || [];

  private plainElements = computed(() => flattenElements(this.elements));
  private searchText = signal<string>('');
  private readonly displayElementWindowService = inject(DisplayElementDialogService);


  selectedIndex: number = -1;

  private dialog: MatDialog = inject(MatDialog);
  public limitElements = signal<number>(5);
  public favoriteElements = computed(() => this.fileExplorerService.favorites())

  public filteredElements = computed(() => {
    return this.plainElements().filter((element) => {
      return element.name.toLowerCase().includes(this.searchText().toLowerCase());
    });
  }
  )

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.limitElements();
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.selectedIndex = (this.selectedIndex - 1 + this.limitElements()) % this.limitElements();
      event.preventDefault();
    } else if (event.key === 'Enter') {
      this.open(this.filteredElements()[this.selectedIndex]);
      event.preventDefault
    }
  }



  handleSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value) {
      this.searchText.set(value)
    } else {
      this.searchText.set('')
    }
  }
  open(element: SystemElement) {

    this.displayElementWindowService.open(element);
    this.dialog.getDialogById('global-search-dialog')?.close();
  }

  addToFavorites(event: Event, element: SystemElement) {
    event.stopPropagation();
    this.fileExplorerService.addToFavorites(element);
  }

  removeFromFavorites(event: Event, element: SystemElement) {
    event.stopPropagation();
    this.fileExplorerService.removeFromFavorites(element);
  }
  isFavorite(element: SystemElement) {
    return this.fileExplorerService.favorites().some((favorite) => favorite.id === element.id);
  }
}
