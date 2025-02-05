import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-game-page',
  templateUrl: './create-game-page.component.html',
  styleUrls: ['./create-game-page.component.css'],
  standalone: false
})
export class CreateGamePageComponent implements OnInit {
  gameForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.gameForm = this.fb.group({
      gameName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z0-9 ]*$/),
          this.maxThreeNumbersValidator
        ]
      ]
    });
  }

  onCreateGame() {
    if (this.gameForm.valid) {
      this.router.navigate(['/game']);
    }
  }

  get gameNameControl() {
    return this.gameForm.get('gameName');
  }

  maxThreeNumbersValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const numbers = (value.match(/\d/g) || []).length;
    return numbers > 3 ? { maxThreeNumbers: true } : null;
  }
}
