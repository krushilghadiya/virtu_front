import { Component } from '@angular/core';
import AOS from 'aos';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  margin = '152px';

  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    AOS.init();
  }

  setMargin(): void {
    this.sharedService.headerHeight.subscribe((height) => {
      this.margin = height + 'px';
      console.log();
    });
  }

  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  ngAfterViewInit() {
    this.setMargin();
  }
}
