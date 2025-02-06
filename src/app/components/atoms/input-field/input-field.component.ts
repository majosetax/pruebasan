import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class InputFieldComponent {
  @Input() label!: string;
  @Input() id!: string;
  @Input() control!: FormControl;

  getErrorMessage(): string {
    if (this.control.hasError('required')) {
      return 'El nombre es obligatorio.';
    }
    if (this.control.hasError('minlength')) {
      return 'El nombre debe tener al menos 5 caracteres.';
    }
    if (this.control.hasError('maxlength')) {
      return 'El nombre debe tener menos de 20 caracteres.';
    }
    if (this.control.hasError('pattern')) {
      return 'El nombre no puede contener caracteres especiales.';
    }
    if (this.control.hasError('maxThreeNumbers')) {
      return 'El nombre no puede tener más de 3 números.';
    }
    return '';
  }
}
