import { Component, Input } from '@angular/core';
import { MediumPost } from 'app/shared/services/medium.service';

@Component({
  selector: 'bm-medium-post',
  standalone: true,
  imports: [],
  templateUrl: './medium-post.component.html',
  styleUrl: './medium-post.component.scss'
})
export class MediumPostComponent {


  @Input() post!: MediumPost
}
