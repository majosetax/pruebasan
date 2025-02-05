import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms'; // Importa FormControl

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent{
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  control = new FormControl();

  constructor() {}


}
