import { Component, DestroyRef, forwardRef, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'bm-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {

  private destroyRef = inject(DestroyRef);

  @Input() placeholder = 'Placeholder';
  @Input() label!: string;
  @Input() showLabel = false
  @Input() prefixIcon!: string;
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
