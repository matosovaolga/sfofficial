
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
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormControl('', [  Validators.minLength(7)]),
    message: new FormControl('', [ Validators.minLength(40)]),
  });

  constructor(private connectionService: ConnectionService,private http: HttpClient) {
  
  }
  get f(){
    return this.myForm.controls;
  }
     
   
     
  submit(){
    const formData = new FormData();

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