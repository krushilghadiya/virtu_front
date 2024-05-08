import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-return-policy',
  templateUrl: './return-policy.component.html',
  styleUrl: './return-policy.component.scss',
})
export class ReturnPolicyComponent {
  mail = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.mail = this.sharedService.mail;
  }
}
