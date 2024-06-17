import { PhoneNumberValidatorDirective } from './phonenumber-validator.directive';
import { FormControl } from '@angular/forms';

describe('PhoneNumberValidatorDirective', () => {
  let directive: PhoneNumberValidatorDirective;

  beforeEach(() => {
    directive = new PhoneNumberValidatorDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should validate a correct phone number', () => {
    const control = new FormControl('1234567890');
    const result = directive.validate(control);
    expect(result).toBeNull(); // valid phone number should return null (no error)
  });

  it('should invalidate an incorrect phone number', () => {
    const control = new FormControl('12345');
    const result = directive.validate(control);
    expect(result).toEqual({ invalidPhoneNumber: true }); // invalid phone number should return the error object
  });

  it('should invalidate an empty phone number', () => {
    const control = new FormControl('');
    const result = directive.validate(control);
    expect(result).toEqual({ invalidPhoneNumber: true }); // empty phone number should return the error object
  });

  it('should invalidate a phone number with non-numeric characters', () => {
    const control = new FormControl('12345abcde');
    const result = directive.validate(control);
    expect(result).toEqual({ invalidPhoneNumber: true }); // non-numeric phone number should return the error object
  });

  it('should invalidate a phone number longer than 10 digits', () => {
    const control = new FormControl('12345678901');
    const result = directive.validate(control);
    expect(result).toEqual({ invalidPhoneNumber: true }); // phone number longer than 10 digits should return the error object
  });
});
