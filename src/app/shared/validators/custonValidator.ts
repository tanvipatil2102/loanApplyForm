import { AbstractControl, ValidationErrors } from "@angular/forms";
import * as moment from "moment";


export class CustomValidators{
    static phoneNumberValidation(control : AbstractControl): ValidationErrors | null{
        const val = control.value as string

        if(!val){
            return null
        }

        const regExp = /^[6-9]\d{9}$/
        let result = regExp.test(val)

        if(result){
            return null
        }else{
            return {
                phoneNumberValErr : `Phone number is 10 digit number,First digit should start with 6-9`
            }
        }
    }

    static dobValidator(control : AbstractControl) : ValidationErrors | null{
        let val = control.value as string;

        if(!val){
            return null
        }

        let dob = moment(val, 'YYYY-MM-DD')
        console.log(dob);

        let today = moment()
        console.log(today);
        
        let diff = today.diff(val, "years")
        console.log(diff);

        if(diff >= 21){
            return null
        }else{
            return {
                dobErrMsg : `Your age must be minimum 21 years old.`
            }
        }
        
    }
}