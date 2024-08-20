import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { VirtualGridComponent } from '@components/virtual-grid/virtual-grid.component';
import { FileExplorerService } from 'app/shared/services/file-explorer.service';
import { SystemElement } from 'app/shared/types/system-element.type';
import { TasksbarComponent } from '../tasksbar/tasksbar.component';
import { NotionPostsService } from 'app/shared/services/notion-posts.service';

@Component({
  selector: 'bm-desktop',
  standalone: true,
  imports: [TasksbarComponent, VirtualGridComponent, NgClass, AsyncPipe],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent implements OnInit {

  private folderService: FileExplorerService = inject(FileExplorerService);

  layout: SystemElement[] = this.folderService.systemFiles()

  private notionPostsService: NotionPostsService = inject(NotionPostsService);


  ngOnInit(): void {
    this.notionPostsService.getPosts().subscribe((data) => {
      console.log(data);
    }
    )
  }
}
