import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MediumService } from 'app/shared/services/medium.service';

@Component({
  selector: 'bm-medium',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './medium.component.html',
  styleUrl: './medium.component.scss'
})
export class MediumComponent {

  account = signal<string>('@borjamrd1')
  private mediumPostsService: MediumService = inject(MediumService);
  post$ = this.mediumPostsService.getPosts(this.account())


  setAccount(name: string) {
    this.account.set(name)
  }

}
