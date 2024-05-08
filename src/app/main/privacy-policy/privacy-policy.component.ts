import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  mail = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.mail = this.sharedService.mail;
  }
}
