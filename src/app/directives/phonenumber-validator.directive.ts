import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumberValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PhoneNumberValidatorDirective, multi: true }
  ]
})
export class PhoneNumberValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const phoneNumberPattern = /^[0-9]{10}$/; // Example pattern: 10 digits
    const isValid = phoneNumberPattern.test(control.value);
    return isValid ? null : { invalidPhoneNumber: true };
  }
}
