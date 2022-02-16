
import { ConnectionService } from '../../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
interface response {
  success: boolean;
  error: string;
}
interface File {
  size: number;
  name: string;
}

@Component({
  selector: 'sf-applyForm',
  templateUrl: 'applyForm.component.html',
  styleUrls: ['applyForm.component.scss']
})
export class SFApplyFormComponent {
  isFileUpload: boolean = false;
  fileSizeError: boolean = false;
  needToploadFile: boolean = false;
  successPopover: boolean = false;
  errorText: string = '';
  isError: boolean = false;
  sendSuccess: boolean = false;
  fileSizedOverloaded: boolean = false;
  file: File = null;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9]+$'), Validators.maxLength(25)]),
    message: new FormControl('', [Validators.minLength(20), Validators.maxLength(450)]),
    file: new FormControl(''),
    fileSource: new FormControl('', [Validators.required])
  });
  constructor(private connectionService: ConnectionService, private http: HttpClient) {

  }
  public hasBaseDropZoneOver:boolean = false;
  //public hasAnotherDropZoneOver:boolean = false;
  
 fileOverBase(e:any):void {
      console.log("hasBaseDropZoneOver", e);
      this.hasBaseDropZoneOver = e;
  }
  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    const regExp = new RegExp('.(pdf|csv|png|jpg|jpeg|xls|xlsx|doc|docx|ods|pptx|txt)$', 'igm');

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      if (this.file.size < 5 * 1000 * 1000 && this.file.name.match(regExp)) {
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
    event.srcElement.value = "";
  }
  deleteFile() {
    this.myForm.patchValue({
      fileSource: {}
    });
    this.file = null;
    this.isFileUpload = false;
  }
  submit(form: any, formDirective: FormGroupDirective) {
    const activeButton: HTMLButtonElement = document.querySelector('.notActive'),
          loadingScreen: HTMLDivElement = document.querySelector('.loading-screen');
    
    if (!activeButton) {
      loadingScreen.style.display = 'flex';
    }

    if (!this.file) {
      this.needToploadFile = true
      setTimeout(() => {
        this.needToploadFile = false;
        return null
      }, 5000);
    }

    if (!form.valid) return null

    const formData = new FormData();

    formData.append('file', this.myForm.get('fileSource').value);
    formData.append('name', this.myForm.get('name').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('phone', this.myForm.get('phone').value);
    formData.append('message', this.myForm.get('message').value);

    this.http.post(this.connectionService.url, formData)
      .subscribe(
        (res: response) => {
          if (res.success) {
            this.sendSuccess = true;
            loadingScreen.style.display = 'none';
            setTimeout(() => {
              this.sendSuccess = false;
            }, 5000);

            formDirective.resetForm();
            this.deleteFile()
          } else {
            setTimeout(() => {
              setTimeout(() => {
                this.errorText = '';
                this.isError = false;
              }, 5000);

              loadingScreen.style.display = 'none';

              this.isError = true;
              this.errorText = res.error;
            }, 5000);
          }

        }, (error: any) => {
          // console.log(error)
          setTimeout(() => {
            setTimeout(() => {
              this.errorText = '';
              this.isError = false;
            }, 5000);

            loadingScreen.style.display = 'none';

            this.isError = true;
            this.errorText = error.statusText;
          }, 5000);

        })
  }

  filterNameInput(): void {
    const input: HTMLInputElement = document.querySelector('#name');

    if (input.value.match(/[^A-Za-zА-яа-я]$/igm)) {
      input.value = input.value.substring(0, input.value.length - 1);
    }
  }

  filterPhoneInput(): void {
    const input: HTMLInputElement = document.querySelector('#phone');

    if (input.value.match(/[^+0-9]$/igm)) {
      input.value = input.value.substring(0, input.value.length - 1);
    }

    if (input.value.length > 1) {
      for (let i = 1; i < input.value.length; i++) {
        if (input.value[i] === '+') {
          input.value = input.value.substring(0, input.value.length - 1);
        }
      }
    }
  }

  noCaps(): void {
    const input: HTMLInputElement = document.querySelector('#email');

    input.value = input.value.toLowerCase();
  }
  
  noPast(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.form-input');

    inputs.forEach(input => {
      input.addEventListener('paste', e => {
        e.preventDefault();
      });
    });
  }

  ngOnInit() {
    this.noPast();
  }
}