
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
  sendSuccess: boolean = false;
  constructor(private connectionService: ConnectionService) {}

  onSubmit(form) {

    this.connectionService.sendMessage(!this.user).subscribe(() => {
      this.sendSuccess = true;
      setTimeout(() => {
        this.sendSuccess = false;
        }, 5000);
        form.resetForm();

    }, (error: any) => {
      this.sendSuccess = true;
      setTimeout(() => {
        this.sendSuccess = false;
        form.resetForm();
        }, 5000);
       
      console.log('Error', error);
    });

  }

}