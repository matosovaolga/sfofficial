
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, FormControlName } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface response {
  success: boolean;
  error: string;
}
@Component({
  selector: 'sf-requestForm',
  templateUrl: './requestForm.component.html',
  styleUrls: ['./requestForm.component.scss']
})

export class SFRequestComponent {
  myFiles: string[] = [];
  fileSizes: number[] = []
  errorText: string = '';
  isError: boolean = false;
  sendSuccess: boolean = false;
  totalFileSize: number = 0;
  public hasBaseDropZoneOver:boolean = false;
  fileSizedOverloaded: boolean = false; 
  public fileOverBase(e:any):void {
      console.log("hasBaseDropZoneOver", e);
      this.hasBaseDropZoneOver = e;
  }
  activeInput: string = '';
  successPopover: boolean = false;

  forms = [
    { id: "name", label: "FullName", requiredError: "Name is required", minlengthError: "Name should be 3 character.", isTouched: "f.name.touched", isInvalid: "f.name.invalid", isErrorRequired: "f.name.errors.required", isErrorMinlength: "f.name.errors.minlength" },
    { id: "email", label: "Email", requiredError: "Email is required.", minlengthError: "Email should be 3 character.", isTouched: "f.email.touched", isInvalid: "f.email.invalid", isErrorRequired: "f.email.errors.required", isErrorMinlength: "f.email.errors.minlength" },
    { id: "phone", label: "Phone", requiredError: "Phone is required.", minlengthError: "Phone should be.", isTouched: "f.phone.touched", isInvalid: "f.phone.invalid", isErrorRequired: "f.phone.errors.required", isErrorMinlength: "f.phone.errors.minlength" },
    { id: "company", label: "Company", requiredError: "Company is required.", minlengthError: "Company should be ", isTouched: "f.company.touched", isInvalid: "f.company.invalid", isErrorRequired: "f.company.errors.required", isErrorMinlength: "f.company.errors.minlength" },
    { id: "message", label: "Project requirements", requiredError: "Message is required.", minlengthError: "not less then 40 letters", isTouched: "f.message.touched", isInvalid: "f.message.invalid", isErrorRequired: "f.message.errors.required", isErrorMinlength: "f.message.errors.minlength" }
  ]

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9+]+$'), Validators.maxLength(25)]),
    company: new FormControl('', [Validators.minLength(4), Validators.maxLength(30)]),
    message: new FormControl('', [Validators.minLength(20), Validators.maxLength(450)]),
    file: new FormControl(''),
  });

  constructor(private connectionService: ConnectionService, private http: HttpClient) {

  }
  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    const regExp = new RegExp('.(pdf|csv|png|jpg|jpeg|xls|xlsx|doc|docx|ods|pptx|txt)$', 'igm');

    if (event.target.files.length > 0) {
      for (var i = 0; i < event.target.files.length; i++) {
        if (event.target.files[i].name.match(regExp)) {
          this.myFiles.push(event.target.files[i]);
          this.fileSizes.push(event.target.files[i].size);
        }
      }
    }
    event.srcElement.value = "";
  }

  deleteFile(index: number) {
    this.myFiles.splice(index, 1);
    this.fileSizes.splice(index, 1);
  }

  submit(form: any, formDirective: FormGroupDirective) {
    const activeButton: HTMLButtonElement = document.querySelector('.notActive'),
          loadingScreen: HTMLDivElement = document.querySelector('.loading-screen');
    
    if (!activeButton) {
      loadingScreen.style.display = 'flex';
    }

    if (!form.valid) return null

    const formData = new FormData();
    this.totalFileSize = this.fileSizes.reduce((a, b) => a + b, 0)
    if (this.totalFileSize > 5000000) {

      this.fileSizedOverloaded = true;
      loadingScreen.style.display = 'none';
      setTimeout(() => {
        this.fileSizedOverloaded = false;
      }, 2000);
      return null
    }

    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append(`file ${i}`, this.myFiles[i]);
    }
    formData.append('name', this.myForm.get('name').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('phone', this.myForm.get('phone').value);
    formData.append('company', this.myForm.get('company').value);
    formData.append('message', this.myForm.get('message').value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(
        (res: response) => {
          // console.log(res)
          if(res.success) {
            this.sendSuccess = true;
            loadingScreen.style.display = 'none';
            setTimeout(() => {
              this.sendSuccess = false;
            }, 5000);
  
            formDirective.resetForm();
            this.myFiles = []
          } else {
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

  filterCompanyInput(): void {
    const input: HTMLInputElement = document.querySelector('#company');

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