import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MediumService } from 'app/modules/medium/services/medium.service';
import { catchError, debounceTime, ignoreElements, of, throttleTime } from 'rxjs';
import { MediumPostComponent } from '../medium-post/medium-post.component';
import { CopyToClipboardComponent } from '@components/copy-to-clipboard/copy-to-clipboard.component';
import { InputComponent } from '@components/input/input.component';

@Component({
  selector: 'bm-medium',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, MediumPostComponent, MatIconModule, InputComponent, ReactiveFormsModule, CopyToClipboardComponent],
  templateUrl: './medium.component.html',
  styleUrl: './medium.component.scss'
})
export class MediumComponent {

  account = new FormControl<string>('borjamrd1')
  private mediumPostsService: MediumService = inject(MediumService);
  posts$ = this.mediumPostsService.getPosts('@' + this.account.value)
  postsError$ = this.posts$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );

  constructor() {
    this.account.valueChanges.pipe(
      debounceTime(300),
      throttleTime(300)
    ).subscribe((account) => {
      if (!account) return
      this.posts$ = this.mediumPostsService.getPosts('@' + account)
      this.postsError$ = this.posts$.pipe(
        ignoreElements(),
        catchError((err) => of(err))
      );
    }
    )
  }



}
