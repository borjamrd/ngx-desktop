import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MediumPost } from 'app/modules/medium/services/medium.service';

@Component({
    selector: 'bm-medium-post',
    imports: [MatIconModule],
    templateUrl: './medium-post.component.html',
    styleUrl: './medium-post.component.scss'
})
export class MediumPostComponent {


  @Input() post!: MediumPost


}
