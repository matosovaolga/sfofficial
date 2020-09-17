
import { ConnectionService } from '../../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sf-applyForm',
  templateUrl: 'applyForm.component.html',
  styleUrls: ['applyForm.component.scss']
})
export class SFApplyFormComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormControl('', [  Validators.minLength(7)]),
    message: new FormControl('', [ Validators.minLength(40)]),
    file: new FormControl(''),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor(private connectionService: ConnectionService, private http: HttpClient) {

  }
  get f(){
    return this.myForm.controls;
  }
     
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  submit(){
    const formData = new FormData();

    formData.append('file', this.myForm.get('fileSource').value);
    formData.append('name', this.myForm.get('name').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('phone', this.myForm.get('phone').value);
    formData.append('message', this.myForm.get('message').value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }

}