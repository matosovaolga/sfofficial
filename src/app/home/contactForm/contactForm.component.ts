
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
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9+]+$'), Validators.maxLength(25)]),
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
    const activeButton: HTMLButtonElement = document.querySelector('.notActive'),
          loadingScreen: HTMLDivElement = document.querySelector('.loading-screen');
    
    if (!activeButton) {
      loadingScreen.style.display = 'flex';
    }

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
// console.log(res)
          if(res.success) {
            // console.log('trueweq')
            this.sendSuccess = true;
            loadingScreen.style.display = 'none';
            setTimeout(() => {
              this.sendSuccess = false;
            }, 5000);
  
            formDirective.resetForm();

          }
          if(res.error) {
            // console.log(res.error)
            setTimeout(() => {
              setTimeout(() => {
                this.errorText = '';
                this.isError = false;
              }, 5000);

              loadingScreen.style.display = 'none';

              this.isError = true;
              this.errorText = res.error;
            }, 5000);
          }
        
      }, (error: any) => {
        // console.log(error)
        setTimeout(() => {
          setTimeout(() => {
            this.errorText = '';
            this.isError = false;
          }, 5000);

          loadingScreen.style.display = 'none';

          this.isError = true;
          this.errorText = error.statusText;
        }, 5000);
      })
  }

  filterNameInput(): void {
    const input: HTMLInputElement = document.querySelector('#name');

    if (input.value.match(/[^A-Za-zА-яа-я]$/igm)) {
      input.value = input.value.substring(0, input.value.length - 1);
    }
  }

  filterSubjectInput(): void {
    const input: HTMLInputElement = document.querySelector('#subject');

    if (input.value.match(/[^A-Za-zА-яа-я\?\!\.,"'`\:;№@]$/igm)) {
      input.value = input.value.substring(0, input.value.length - 1);
    }
  }

  filterPhoneInput(): void {
    const input: HTMLInputElement = document.querySelector('#phone');

    if (input.value.match(/[^+0-9]$/igm)) {
      input.value = input.value.substring(0, input.value.length - 1);
    }

    if (input.value.length > 1) {
      for (let i = 1; i < input.value.length; i++) {
        if (input.value[i] === '+') {
          input.value = input.value.substring(0, input.value.length - 1);
        }
      }
    }
  }

  filterEmailInput(): void {
    const input: HTMLInputElement = document.querySelector('#email');

    input.value = input.value.toLowerCase();

    let at = 0;

    if (input.value.match(/[^A-Za-z0-9\.@_-]$/igm)) {
      input.value = input.value.substring(0, input.value.length - 1);
    }
    
    for (let i = 0; i < input.value.length; i++) {
      if (input.value[i] === '@') {
        at = i + 1;
        for (let i = at; i < input.value.length; i++) {
          if (input.value.match(/[^A-Za-z0-9\._-]$/igm)) {
            input.value = input.value.substring(0, input.value.length - 1);
          }
        }
      }
    }
  }
  
  noPast(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.form-input');

    inputs.forEach(input => {
      input.addEventListener('paste', e => {
        e.preventDefault();
      });
    });
  }

  ngOnInit() {
    this.noPast();
  }
}