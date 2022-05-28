import { Injectable } from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { LoggedInUserModel } from '../models/loggedInUser.model';
import { AccountService } from '../services/account.service';

@Injectable({
    providedIn: 'root',
})
export class CustomValidatorsService {
    constructor(private accService: AccountService) {}

    public minimumAgeValidator(minAge: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) return null; // return if the date of birth is null

            var year = new Date(Date.now()).getFullYear();
            var yearDob = new Date(control.value).getFullYear();
            if (year - yearDob >= minAge) {
                return null;
            } else {
                return { minAge: { valid: false } };
            }
        };
    }

    public confirmPasswordValidator(
        controlName: string,
        matchingControlName: string
    ) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (
                matchingControl.errors &&
                !matchingControl.errors['mustMatch']
            ) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    public checkExistEmail(): AsyncValidatorFn {
        return (
            control: AbstractControl
        ): Observable<ValidationErrors | null> => {
            return this.accService.getUserByEmail(control.value).pipe(
                map((result: LoggedInUserModel) => {
                    if (result != null) {
                        return { uniqueEmail: { valid: false } };
                    } else {
                        return null;
                    }
                })
            );
        };
    }
}
