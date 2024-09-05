import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, model, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@Component({
  selector: 'bm-navbar-clock',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './navbar-clock.component.html',
  styleUrl: './navbar-clock.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: '',

  }
})
export class NavbarClockComponent {

  public date = computed(() => new Date());
  open = signal<boolean>(false);
  selected = model<Date | null>(null);


}
