
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sf-requestForm',
  templateUrl: './requestForm.component.html',
  styleUrls: ['./requestForm.component.scss']
})
export class SFRequestComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    message: new FormControl('', [ Validators.minLength(40)]),
    file: new FormControl(''),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private connectionService: ConnectionService,private http: HttpClient) {
  
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
    formData.append('myForm', this.myForm.value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }


}