
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'sf-expertises.social',
  templateUrl: './socialNetworking.component.html',
  styleUrls: ['./socialNetworking.component.scss']
})

export class SFSocialNetworkingComponent {
  title: string = 'SOCIAL NETWORKING SOLUTIONS';
  textBanner: string = 'We embed social features into traditional web solutions, accommodate corporate environments with social capabilities, build niche community portals and turn social networking ideas into compelling applications.';
}