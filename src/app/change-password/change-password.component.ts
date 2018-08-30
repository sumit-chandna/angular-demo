import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangePasswordValidators } from './change-password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = new FormGroup({
    oldPassword: new FormControl('', [Validators.required], [ChangePasswordValidators.invalidOldPassword]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: ChangePasswordValidators.confirmPasswordNotValid });
  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  submit() {
    console.log(this.form);
  }
}
