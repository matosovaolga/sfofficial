
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  fileSizedOverloaded: boolean = false;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormControl('', [Validators.minLength(7)]),
    message: new FormControl('', [Validators.minLength(40)]),
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
    const formData = new FormData();
    this.totalFileSize = this.fileSizes.reduce((a, b) => a + b, 0)

    if (this.totalFileSize > 1000000) {
      console.log('files more than 5mg')
      this.fileSizedOverloaded = true;
      setTimeout(() => {
        this.fileSizedOverloaded = false;
      }, 2000);
      return null
    }

    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append(`file ${i}`, this.myFiles[i]);
    }
console.log(formDirective)
    formData.append('name', this.myForm.get('name').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('phone', this.myForm.get('phone').value);
    formData.append('company', this.myForm.get('company').value);
    formData.append('message', this.myForm.get('message').value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(res => {
        this.sendSuccess = true;
        setTimeout(() => {
          this.sendSuccess = false;
        }, 5000);

        formDirective.resetForm();
        this.myFiles = []

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