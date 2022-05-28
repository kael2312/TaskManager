import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { markFormGroupTouched } from 'src/app/helpers/form';
import { regex } from 'src/app/helpers/regex';
import { CountryModel } from 'src/app/models/country.model';
import { SignUpModel } from 'src/app/models/signUp.model';
import { AccountService } from 'src/app/services/account.service';
import { CountriesService } from 'src/app/services/countries.service';
import { CustomValidatorsService } from 'src/app/validators/custom-validators.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup = new FormGroup({})
    listCountries: CountryModel[] = [];
    listCountries$: Observable<CountryModel[]> = new Observable()

    constructor(
        private fb: FormBuilder,
        private customValidator: CustomValidatorsService,
        private countriesService: CountriesService,
        private accService: AccountService,
        private route: Router
    ) {}


    ngOnInit(): void {
        this.onInitSignUpForm();
        this.getListCountries();
        this.getListCountriesSub();
    }

    getListCountries(){
        this.listCountries$ = this.countriesService.getAll();
    }

    getListCountriesSub(){
        this.countriesService.getAll().subscribe(result => {
            console.log(result);
            
        });
    }

    onSubmitSignUpForm(){
        if (!this.signUpForm.valid) {
            markFormGroupTouched(this.signUpForm);
        }else{
            console.log((this.signUpForm.getRawValue()));
            console.log(new SignUpModel(this.signUpForm.getRawValue()))
            this.accService.register(new SignUpModel(this.signUpForm.getRawValue()))
                .subscribe(result => {
                    localStorage.setItem('token', (result.token)) 
                    this.route.navigateByUrl('/member')                    
                })
        }
    }

    onInitSignUpForm(){
        this.signUpForm = this.fb.group({
            personName: this.fb.group({
                firstName: new FormControl(null, {validators: [
                    Validators.required
                ]}),
                lastName: new FormControl(null, {validators: [
                    Validators.required
                ]})
            }),
            password: new FormControl('', {validators: [
                Validators.required,
                Validators.pattern(regex.password)
            ]}),
            confirmPassword: new FormControl('', {validators: [
                Validators.required,
            ]}),
            email: new FormControl('', { 
                validators: [
                    Validators.required,
                    Validators.pattern(regex.email),
                ],
                asyncValidators: [
                    this.customValidator.checkExistEmail()
                ],
                updateOn: 'blur'
            }),
            mobile: new FormControl('', {validators: [
                Validators.required
            ]}),
            dateOfBirth: new FormControl('', {validators: [
                Validators.required,
                this.customValidator.minimumAgeValidator(18)
            ]}),
            gender: new FormControl('male'),
            country: new FormControl(0, {validators: [
                Validators.required
            ]}),
            receiveLetters: new FormControl(false),
            skills: this.fb.array([])
        },
        {
            validators: [
                this.customValidator.confirmPasswordValidator('password', 'confirmPassword'),
            ],
        }
        )
    }    

    get skills() {
        const abcd = this.signUpForm.controls['skills'] as FormArray
        return abcd.controls
    }

    onAddSkill(){
        var formGroup =  new FormGroup({
            skillName: new FormControl(null, {validators: [
                Validators.required
            ]}),
            skillLevel: new FormControl('', {validators: [
                Validators.required
            ]})
        });
        (<FormArray>this.signUpForm.get('skills')).push(formGroup)
    }

    onRemoveSkill(i: number){
        (<FormArray>this.signUpForm.get('skills')).removeAt(i)
    }

    onSelecCountry(event: Event){
        const selectEvent = event.target as HTMLSelectElement
        console.log(selectEvent.value);
        
    }

}
