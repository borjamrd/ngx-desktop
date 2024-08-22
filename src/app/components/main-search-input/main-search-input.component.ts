import { Component } from '@angular/core';
import { InputComponent } from '../ui/input/input.component';

@Component({
  selector: 'bm-main-search-input',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './main-search-input.component.html',
  styleUrl: './main-search-input.component.scss'
})
export class MainSearchInputComponent {

}
