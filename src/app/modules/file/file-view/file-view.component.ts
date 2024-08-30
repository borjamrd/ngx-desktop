import { AsyncPipe } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, input, viewChild } from '@angular/core';
import { SecureResourceUrlPipe } from 'app/shared/pipes/safe-resource-url.pipe';
import { SystemElement } from "app/shared/types/system-element.type";

@Component({
  selector: 'bm-file-view',
  standalone: true,
  imports: [
    AsyncPipe,
    SecureResourceUrlPipe
  ],
  templateUrl: './file-view.component.html',
  styleUrl: './file-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'h-full',
  }
})
export class FileViewComponent {

  public fileData = input.required<SystemElement['fileData']>()



}
