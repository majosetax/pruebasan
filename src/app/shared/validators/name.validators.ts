import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nameValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  const validFormat = /^[a-zA-Z0-9\s]{5,20}$/;

  // Verifica si el formato es válido (solo letras, números y espacios, entre 5 y 20 caracteres)
  if (!validFormat.test(value)) {
    return { invalidFormat: true };
  }

  // Verifica si el nombre está compuesto solo por números
  if (/^\d+$/.test(value)) {
    return { noOnlyNumbers: true };
  }

  // Cuenta los números en el valor
  const numberCount = (value.match(/\d/g) || []).length;

  // Verifica si hay más de 3 números
  if (numberCount > 3) {
    return { maxThreeNumbers: true };
  }

  return null;
}
