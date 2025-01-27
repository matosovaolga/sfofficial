import { Component, Input } from '@angular/core';
@Component({
  selector: "sf-btn",
  templateUrl: "./btn.component.html",
  styleUrls: ["./btn.component.scss"],
})
export class SFBtnComponent {
  @Input() type: string = "button";
}