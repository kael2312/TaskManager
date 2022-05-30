import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { markFormGroupTouched } from 'src/app/helpers/form';
import { LoggedInUserModel } from 'src/app/models/loggedInUser.model';
import { AccountService } from 'src/app/services/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup = new FormGroup({});
    constructor(
        private fb: FormBuilder,
        private accService: AccountService,
        private route: Router
    ) {}

    ngOnInit(): void {
        this.onInitLoginForm();
    }

    onInitLoginForm() {
        this.loginForm = this.fb.group({
            UserName: new FormControl(null, {
                validators: [Validators.required],
            }),
            Password: new FormControl(null, {
                validators: [Validators.required],
            }),
        });
    }

    onSubmitLoginForm() {
        const jwtHelper = new JwtHelperService();
        if (!this.loginForm.valid) {
            markFormGroupTouched(this.loginForm);
        } else {
            this.accService
                .login(this.loginForm.getRawValue())
                .subscribe();
        }
    }
}
