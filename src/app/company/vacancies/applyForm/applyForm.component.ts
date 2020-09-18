
import { ConnectionService } from '../../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
interface File {
  size: number,
}

@Component({
  selector: 'sf-applyForm',
  templateUrl: 'applyForm.component.html',
  styleUrls: ['applyForm.component.scss']
})
export class SFApplyFormComponent {
  isFileUpload: boolean = false;
  fileSizeError: boolean = false;

  errorText: string = '';
  sendSuccess: boolean = false;

  file: File = null;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormControl('', [Validators.minLength(7)]),
    message: new FormControl('', [Validators.minLength(40)]),
    file: new FormControl(''),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor(private connectionService: ConnectionService, private http: HttpClient) {

  }
  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      if (this.file.size < 5 * 1000 * 1000) {
        this.myForm.patchValue({
          fileSource: this.file
        });
        this.isFileUpload = true
      }
      else {
        this.fileSizeError = true;
        setTimeout(() => {
          this.fileSizeError = false;

        }, 5000);
      }

    }
  }
  deleteFile() {
    this.myForm.patchValue({
      fileSource: {}
    });
    this.file = null;
    this.isFileUpload = false;
  }
  submit(form: any, formDirective: FormGroupDirective) {
    const formData = new FormData();
    console.log(form)
    formData.append('file', this.myForm.get('fileSource').value);
    formData.append('name', this.myForm.get('name').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('phone', this.myForm.get('phone').value);
    formData.append('message', this.myForm.get('message').value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(res => {
        this.sendSuccess = true;
        setTimeout(() => {
          this.sendSuccess = false;
        }, 5000);
        formDirective.resetForm();
        this.deleteFile();

      }, (error: any) => {
        // console.log(error)
        setTimeout(() => {
          setTimeout(() => {
            this.errorText = '';
            formDirective.resetForm();
            this.deleteFile();


          }, 5000);

          this.errorText = error.status + " " + error.statusText;
        }, 5000);

      })
  }

}