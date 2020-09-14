
import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'sf-contactForm',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class SFContactComponent {
  user = {};
  errorText: boolean = false;
  sendSuccess: boolean = false;
  constructor(private connectionService: ConnectionService) {}

  onSubmit(form) {
      this.connectionService.sendMessage(!this.user).subscribe(() => {

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
       this.errorText = error.statusText;
    });

  }

}