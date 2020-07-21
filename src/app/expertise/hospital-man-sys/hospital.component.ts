
import { ConnectionService } from '../../home/contactForm/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'sf-expertises.hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})

export class SFHospitalManagementComponent {
  highlights = [
    { id: 1, title: "Extended Care Platform", text: "Add new efficient services to increase care and revenues" },
    { id: 2, title: "Modern & Advanced Offerings", text: "From small to very large network hospitals, our HIS can fit healthcare enterprises of all sizes" },
    { id: 3, title: "Adheres to Global Standards", text: "We integrate modern solutions and strictly assent with global standards" },
    { id: 4, title: "Low Total Cost of Ownership", text: "Economy solution; an investment that is comparable to the best in the market at lower" },
    { id: 5, title: "Streamlined User Experience", text: "Refined user experience for Elevated adoption and sleek processes" },
  ]

  features = [
    { id: 1, title: "Information Management", text: "Improve financial performance and reduce administration" },
    { id: 2, title: "Social", text: "Empowers your staff by streamlining administrative and clinical tasks with automated process management" },
    { id: 3, title: "Collaboration", text: "Create new streams of revenue through CIS’s integrated solution suite for healthcare" },
    { id: 4, title: "Applications", text: "Use Business Intelligence (BI) tools for statistical analysis and get a better understanding of enterprise requirements" },
    { id: 5, title: "Infrastructure", text: "Presents insight into the work structure, processes and flows from the Company environment" },
    { id: 6, title: "Analytics", text: "Achieve greater data security by leveraging access-controlled system and role-based access" },
  ]

}