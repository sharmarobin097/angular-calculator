import { Directive, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { OperationValidator } from './operation-validator';

@Directive({
  selector: '[appOperationValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: OperationValidatorDirective, multi: true }]
})
export class OperationValidatorDirective {

  constructor() { }

  @Input('appOperationValidator') appOperationVal = '';

  validate(formGroup: FormGroup): ValidationErrors {
    return OperationValidator(this.appOperationVal)(formGroup);
}

}
