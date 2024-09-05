import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, input, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule, SubscriptSizing } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'bm-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
    },

  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {

  private destroyRef = inject(DestroyRef);

  public placeholder = input<string>('');
  public label = input<string>();
  public showLabel = input<boolean>(false)
  public prefixIcon = input<string>();
  public valueClearable = input<boolean>(false)
  public showButton = input<boolean>()

  form!: FormGroup;
  private onChange = (value: string) => { };
  private onTouched = () => { };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: ['']
    })
    this.form.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((value) => {
        this.onChange(value.input)
      })

  }

  public writeValue(value: string): void {
    this.form.get('input')?.setValue(value)
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onBlur(): void {
    this.onTouched();
  }

  get value(): string {
    return this.form.get('input')?.value;
  }

}
