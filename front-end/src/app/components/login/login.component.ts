import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedInUserModel } from 'src/app/models/loggedInUser.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({})
    constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) {}

    ngOnInit(): void {
        this.onInitLoginForm();
    }

    onInitLoginForm(){
        this.loginForm = this.fb.group({
            UserName: new FormControl(''),
            Password: new FormControl(''),
        })
    }

    onSubmitLoginForm(){
        this.loginService.login(this.loginForm.getRawValue())
            .subscribe((result: LoggedInUserModel) => {
                localStorage.setItem('token', (result.token)) 
                this.route.navigateByUrl('/admin/project')               
            })
    }
}
