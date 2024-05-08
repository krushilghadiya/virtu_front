import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('header') header!: ElementRef;

  constructor(private sharedService: SharedService) {}

  ngAfterViewInit() {
    this.sharedService.headerHeight.next(
      this.header.nativeElement.clientHeight
    );
  }
}
