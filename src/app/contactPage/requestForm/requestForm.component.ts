
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
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormControl('', [  Validators.minLength(7)]),
    message: new FormControl('', [ Validators.minLength(40)]),
     
    file: this.formBuilder.array([
      this.formBuilder.control('', [Validators.required])
    ]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private connectionService: ConnectionService,private http: HttpClient, private formBuilder: FormBuilder) {

  }
  get f(){
    return this.myForm.controls;
  }
     
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file,
        file: event.target.files
      });
    }
  }
     
  submit(){
    const formData = new FormData();
    formData.append('files', this.myForm.get('file').value);
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