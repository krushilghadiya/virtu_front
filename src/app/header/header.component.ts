import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('header') header!: ElementRef;

  constructor(private sharedService: SharedService, private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.sharedService.headerHeight.next(
      this.header.nativeElement.clientHeight
    );
  }

  redirect(): void {
    this.router.navigate(['/']);
  }

  ngAfterViewInit() {
    this.sharedService.headerHeight.next(
      this.header.nativeElement.clientHeight
    );
  }
}
