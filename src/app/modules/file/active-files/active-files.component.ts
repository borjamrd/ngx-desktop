import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { DisplayElementDialogService } from "app/shared/services/display-element-dialog.service";
import { FileExplorerService } from "app/shared/services/file-explorer.service";
import { SystemElement } from "app/shared/types/system-element.type";

@Component({
  selector: 'bm-active-files',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './active-files.component.html',
  styleUrl: './active-files.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveFilesComponent {

  private fileExplorer = inject(FileExplorerService)
  public activeFiles = this.fileExplorer.activeFiles()
  private readonly displayElementWindowService = inject(DisplayElementDialogService);


  handleClick(file: SystemElement) {
    this.displayElementWindowService.open(file)
  }
}
