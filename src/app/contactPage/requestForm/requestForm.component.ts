
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'sf-requestForm',
  templateUrl: './requestForm.component.html',
  styleUrls: ['./requestForm.component.scss']
})
export class SFRequestComponent {
  user = {
    data: File = null
  };
  errorText: boolean = false;
  sendSuccess: boolean = false;
  response: string;
  fileToUpload: File = null;



  constructor(private connectionService: ConnectionService, private http: HttpClient) {

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0); 
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    // this.http.post('Your end-point URL', formData).subscribe((val) => {
    
    // console.log(val);
    // });
    // return false; 
    this.user.data =  formData;
    console.log(formData)
  }
 

  onSubmit(form) {

    // console.log(this.user)
    this.connectionService.sendMessage(this.user).subscribe(() => {
      this.sendSuccess = true;
      setTimeout(() => {
        this.sendSuccess = false;
      }, 10000);
      // form.resetForm();

    }, (error: any) => {
      setTimeout(() => {
        this.errorText = false;
        // form.resetForm();
      }, 10000);
      console.log(this.user);
      this.errorText = error.statusText;
    });

  }

}