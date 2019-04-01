import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function OperationValidator(controlName: string):any {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];

        if (control.value !== '1 2 3 4') {
            control.setErrors({ mustMatch: true });
        } else {
            control.setErrors(null);
        }
    }
}
