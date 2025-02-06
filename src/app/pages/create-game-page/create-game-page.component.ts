import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../components/atoms/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/atoms/button/button.component';


const maxThreeNumbersValidator: ValidatorFn = (control) => {
  const value = control.value || '';
  const numberCount = (value.match(/\d/g) || []).length;
  return numberCount > 3 ? { maxThreeNumbers: true } : null;
};

@Component({
  selector: 'app-create-game-page',
  templateUrl: './create-game-page.component.html',
  styleUrls: ['./create-game-page.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputFieldComponent, ButtonComponent],

})
export class CreateGamePageComponent {
  gameForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z0-9]*$/),
        maxThreeNumbersValidator,
      ]
    })
  });
}
