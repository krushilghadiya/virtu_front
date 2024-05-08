import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  mail = '';
  mobileNumber!: number
  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    this.mail = this.sharedService.mail;
    this.mobileNumber = this.sharedService.mobileNumber;
  }

  navigation(rout: string): void {
    this.router.navigate([rout]);
  }
}
