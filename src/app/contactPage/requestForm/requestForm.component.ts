
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'sf-requestForm',
  templateUrl: './requestForm.component.html',
  styleUrls: ['./requestForm.component.scss']
})
export class SFRequestComponent {
  user = {
    name: '',
    length: '',
    contentType: '',
    date: new Date(),
    file: {}
  };
  errorText: boolean = false;
  sendSuccess: boolean = false;
  fileToUpload: File = null;

  response:string;
  constructor(private connectionService: ConnectionService) {
  }
 
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log('handleFileInput',this.fileToUpload)
} 

  onSubmit(form) {
    this.user.file = this.fileToUpload;
  
    this.connectionService.sendMessage(this.user).subscribe(() => {
      this.sendSuccess = true;
      setTimeout(() => {
        this.sendSuccess = false;
        }, 10000);
        form.resetForm();

    }, (error: any) => {
      setTimeout(() => {
        this.errorText = false;
        form.resetForm();
        }, 10000);
        console.log(this.user);
       this.errorText = error.statusText;
    });

  }

}