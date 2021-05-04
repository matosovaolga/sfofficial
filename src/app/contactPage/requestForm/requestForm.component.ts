
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
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9]+$'), Validators.maxLength(14)]),
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
    if (event.target.files.length > 0) {
      for (var i = 0; i < event.target.files.length; i++) {
        this.myFiles.push(event.target.files[i]);
        this.fileSizes.push(event.target.files[i].size);

      }
    }
    event.srcElement.value = "";
  }

  deleteFile(index: number) {
    this.myFiles.splice(index, 1);
    this.fileSizes.splice(index, 1);
  }

  submit(form: any, formDirective: FormGroupDirective) {
    if (!form.valid) return null

    const formData = new FormData();
    this.totalFileSize = this.fileSizes.reduce((a, b) => a + b, 0)
    if (this.totalFileSize > 5000000) {
 
      this.fileSizedOverloaded = true;
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
          console.log(res)
          if(res.success) {
            this.sendSuccess = true;
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