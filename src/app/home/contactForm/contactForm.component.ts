
import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'sf-contactForm',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class SFContactComponent {

contactForm: FormGroup;
disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(fb: FormBuilder, private connectionService: ConnectionService) {


  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubject': ['', Validators.required],
    'contactFormPhone': [''],
    'contactFormMessage': ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  get name() {
    return this.contactForm.get('contactFormName');
  }
  get email() {
    return this.contactForm.get('contactFormEmail');
  }
  get subject() {
    return this.contactForm.get('contactFormSubject');
  }
  get phone() {
    return this.contactForm.get('contactFormPhone');
  }
  get message() {
    return this.contactForm.get('contactFormMessage');
  }


  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, (error: any) => {
      console.log('Error', error);
    });
  
  }
    
}