// src/app/shared/validators/name.validators.spec.ts
import { FormControl } from '@angular/forms';
import { nameValidator } from './name.validators';

describe('nameValidator', () => {

  it('should return null if the name is valid (5-20 characters, letters, numbers, spaces)', () => {
    const control = new FormControl('ValidName123');
    const result = nameValidator(control);
    expect(result).toBeNull();
  });

  it('should return error if the name contains special characters', () => {
    const control = new FormControl('Invalid@Name!');
    const result = nameValidator(control);
    expect(result).toEqual({ invalidFormat: true });
  });

  it('should return error if the name is less than 5 characters', () => {
    const control = new FormControl('123');
    const result = nameValidator(control);
    expect(result).toEqual({ invalidFormat: true });
  });

  it('should return error if the name is longer than 20 characters', () => {
    const control = new FormControl('ThisIsAVeryLongNameThatExceedsLimit');
    const result = nameValidator(control);
    expect(result).toEqual({ invalidFormat: true });
  });

  it('should return error if the name contains more than 3 numbers', () => {
    const control = new FormControl('Name1234');
    const result = nameValidator(control);
    expect(result).toEqual({ maxThreeNumbers: true });
  });

  it('should return error if the name consists only of numbers', () => {
    const control = new FormControl('123456');
    const result = nameValidator(control);
    expect(result).toEqual({ noOnlyNumbers: true });
  });

});
