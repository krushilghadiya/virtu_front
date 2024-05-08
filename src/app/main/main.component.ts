import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  ngOnInit() {
    AOS.init();
  }
}
