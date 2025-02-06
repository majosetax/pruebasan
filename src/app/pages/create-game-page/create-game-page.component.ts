import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../components/atoms/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/atoms/button/button.component';
import { nameValidator } from '../../shared/validators/name.validators';

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
      validators: [nameValidator],
    })
  });
}
