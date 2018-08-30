import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangePasswordValidators {
    static confirmPasswordNotValid(control: AbstractControl): ValidationErrors | null {
        if (control.get('confirmPassword').value !== '') {
            if (control.get('newPassword').value !== control.get('confirmPassword').value) {
                return {
                    confirmPasswordNotValid: true
                }
            }
        }
        return null;
    }
    static invalidOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '1234') {
                    resolve({ invalidOldPassword: true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
}