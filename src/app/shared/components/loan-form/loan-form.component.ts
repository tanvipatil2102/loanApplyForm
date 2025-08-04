import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/custonValidator';
import { CustomRegex } from '../../validators/customRegX';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  personalDetailForm !: FormGroup;
  documentForm !: FormGroup;

  constructor(
    private fb : FormBuilder
  ) {
    this.personalDetailForm = fb.group({
      name : [null, [Validators.required]],
      email : [null, [Validators.required, Validators.pattern(CustomRegex.email)]],
      phone : [null, [Validators.required, CustomValidators.phoneNumberValidation]],
      dob : [null, [Validators.required, CustomValidators.dobValidator]],
      gender : [null, [Validators.required]],
      maritalStatus : ['', [Validators.required]]
    })

    this.documentForm = fb.group({
      pan : [null, [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
      aadhar : [null, [Validators.required, Validators.pattern(/^\d{4}\s?\d{4}\s?\d{4}$/)]]
    })
   }

  ngOnInit(): void {
  }

  get f(){
    return this.personalDetailForm.controls
  }

}
