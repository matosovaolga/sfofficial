
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sf-requestForm',
  templateUrl: './requestForm.component.html',
  styleUrls: ['./requestForm.component.scss']
})
export class SFRequestComponent {
  myFiles: string[] = [];

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
        // console.log(this.myFiles[i].name)
      }
    }
  }
  deleteFile(index: number) {
    this.myFiles.splice(index, 1);
  }

  submit() {
    const formData = new FormData();
    // formData.append('file', this.myForm.get('fileSource').value);
    for (var i = 0; i < this.myFiles.length; i++) { 
      formData.append(`file ${i}`, this.myFiles[i]);
    }

    formData.append('name', this.myForm.get('name').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('phone', this.myForm.get('phone').value);
    formData.append('company', this.myForm.get('company').value);
    formData.append('message', this.myForm.get('message').value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }


}