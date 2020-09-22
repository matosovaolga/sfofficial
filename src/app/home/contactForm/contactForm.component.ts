
import { ConnectionService } from './connection.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sf-contactForm',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class SFContactComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required,Validators.email,Validators.minLength(3), Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern('^[0-9]+$'), Validators.maxLength(14)]),
    subject: new FormControl('', [  Validators.minLength(7),Validators.maxLength(30)]),
    message: new FormControl('', [Validators.minLength(20),Validators.maxLength(450)]),

  });

  constructor(private connectionService: ConnectionService,private http: HttpClient) {
  
  }
  get f(){
    return this.myForm.controls;
  }
     
   
     
  submit(form){
    if (!form.valid) return null
    const formData = new FormData();

    formData.append('name', this.myForm.get('name').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('phone', this.myForm.get('phone').value);
    formData.append('subject', this.myForm.get('subject').value);
    formData.append('message', this.myForm.get('message').value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }

}