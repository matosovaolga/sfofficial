
import { ConnectionService } from './connection.service';
import { FormControl, FormGroup, FormBuilder, Validators,FormGroupDirective } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface response {
  success: boolean;
  error: string;
}
@Component({
  selector: 'sf-contactForm',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})

export class SFContactComponent {
  errorText: string = '';
  isError: boolean = false;
  sendSuccess: boolean = false;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9]+$'), Validators.maxLength(14)]),
    subject: new FormControl('', [Validators.minLength(7), Validators.maxLength(30)]),
    message: new FormControl('', [Validators.minLength(20), Validators.maxLength(450)]),

    // name: new FormControl(''),
    // email: new FormControl(''),
    // phone: new FormControl(''),
    // subject: new FormControl(''),
    // message: new FormControl(''),

  });

  constructor(private connectionService: ConnectionService, private http: HttpClient) {

  }
  get f() {
    return this.myForm.controls;
  }



  submit(form:any, formDirective: FormGroupDirective) {
    if (!form.valid) return null
    const formData = new FormData();

    formData.append('name', this.myForm.get('name').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('phone', this.myForm.get('phone').value);
    formData.append('subject', this.myForm.get('subject').value);
    formData.append('message', this.myForm.get('message').value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(
        (res: response) => {
console.log(res)
          if(res.success) {
            console.log('trueweq')
            this.sendSuccess = true;
            setTimeout(() => {
              this.sendSuccess = false;
            }, 5000);
  
            formDirective.resetForm();

          } 
          if(res.error) {
            console.log(res.error)
            setTimeout(() => {
              setTimeout(() => {
                this.errorText = '';
                this.isError = false;
              }, 5000);
    
              this.isError = true;
              this.errorText = res.error;
            }, 5000);
          }
        
      }, (error: any) => {
        console.log(error)
        setTimeout(() => {
          setTimeout(() => {
            this.errorText = '';
            this.isError = false;
          }, 5000);

          this.isError = true;
          this.errorText = error.statusText;
        }, 5000);
      })
  }

}