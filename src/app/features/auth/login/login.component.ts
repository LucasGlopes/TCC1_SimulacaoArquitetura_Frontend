import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hidePassword: boolean = true;
    loginForm: FormGroup = this.initForm();

    constructor(
        private router: Router,
        private fb: FormBuilder
    ){}

    ngOnInit(): void {
        
    }

    initForm() {
        const form = {
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        }

        return this.fb.group(form);
    }

    changePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }

    onSubmit() {
        console.log(this.loginForm.value)

        this.router.navigate(['dashboard'])
    }

    createAccount() {
        this.router.navigate(['auth','registration']);
    }

}
