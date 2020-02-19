import { Component } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'sf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SFHomeComponent {
  faCogs = faCogs;
}