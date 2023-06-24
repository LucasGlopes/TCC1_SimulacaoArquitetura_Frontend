import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectorOption } from 'src/app/models/selector.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
    hidePassword: boolean = true;
    registrationForm: FormGroup = this.initForm();

    sexOptions: SelectorOption[] = [
        {
            label: 'Masculino',
            value: 'M'
        },
        {
            label: 'Feminino',
            value: 'F'
        },
        {
            label: 'Outro',
            value: 'O'
        }
    ]

    constructor(
        private router: Router,
        private fb: FormBuilder
    ){}

    ngOnInit(): void {
        
    }

    initForm() {
        const form = {
            name:['', [Validators.required]],
            phone:['', [Validators.required]],
            dateBirth:['', [Validators.required]],
            sex:['', [Validators.required]],
            cpf:['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]],
            company: ['', [Validators.required]],
            sector: ['', [Validators.required]],
        }

        return this.fb.group(form);
    }

    changePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }

    cancel() {
        this.router.navigate(['auth','login']);
    }

    onSubmit(){
        console.log(this.registrationForm.value);

        this.router.navigate(['dashboard']);

    }

}
