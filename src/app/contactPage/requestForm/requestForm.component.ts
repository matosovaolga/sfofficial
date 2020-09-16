
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'sf-requestForm',
  templateUrl: './requestForm.component.html',
  styleUrls: ['./requestForm.component.scss']
})
export class SFRequestComponent {
  user = {
    uploader: new FileUploader({})
  };
  errorText: boolean = false;
  sendSuccess: boolean = false;
  uploader: FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  constructor(private connectionService: ConnectionService) {
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
 
 
    this.response = '';
 
    this.uploader.response.subscribe( res => this.response = res );
  }
 
  onSubmit(form) {
    this.user.uploader = this.uploader;
  
    this.connectionService.sendMessage(!this.user).subscribe(() => {
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