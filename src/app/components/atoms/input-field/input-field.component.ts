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
    if (this.control.hasError('invalidLength')) {
      return 'El nombre debe tener entre 5 y 20 caracteres.';
    }
    if (this.control.hasError('invalidFormat')) {
      return 'El nombre solo puede contener letras, números y espacios.';
    }
    if (this.control.hasError('maxThreeNumbers')) {
      return 'El nombre no puede tener más de 3 números.';
    }
    if (this.control.hasError('noOnlyNumbers')) {
      return 'El nombre no puede ser solo numérico.';
    }
    return '';
  }
}
