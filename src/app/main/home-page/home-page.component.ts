import { Component } from '@angular/core';
import AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  faqData = [
    {
      question:
        '1. Do Lab Grown Diamonds typically cost less than mined diamonds?',
      answer:
        'Yes, Lab Grown Diamonds are usually priced at a 60-90% discount compared to natural diamonds of equivalent quality. Their pricing is based on the same factors as natural diamonds: cut, color, clarity, and carat weight',
    },
    {
      question:
        '2. How do Lab Grown Diamonds differ from synthetic diamonds or moissanite?',
      answer:
        'Lab Grown Diamonds are distinct from synthetic diamonds, cubic zirconia, or moissanite. While the latter are diamond simulants, Lab Grown Diamonds are genuine diamonds with the same chemical composition as mined ones.',
    },
    {
      question: '3. Are Lab Grown Diamonds durable?',
      answer:
        'Absolutely. Lab Grown Diamonds share the remarkable durability of natural diamonds, ranking 10 on the Mohs Scale of hardness. Their resilience ensures they can be passed down through generations',
    },
    {
      question:
        '4. Are Lab Grown Diamonds the same as synthetic diamonds or moissanite?',
      answer:
        'Lab Grown Diamonds are real diamonds, not synthetic or simulated. Unlike cubic zirconia or moissanite, they have the same chemical structure as natural diamonds.',
    },
    {
      question: '5. Are Lab Grown Diamonds worth buying?',
      answer:
        'Yes, Lab Grown Diamonds are valuable investments as they last forever. Like natural diamonds, they offer enduring worth. Jewelbox provides an 80% buyback on Lab Grown Diamonds.',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    margin: 10,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  slidesStore = [
    {
      src: '../../assets/category-5.png',
      id: '1',
    },
    {
      src: '../../assets/category-1.png',
      id: '2',
    },
    {
      src: '../../assets/category-5.png',
      id: '3',
    },
    {
      src: '../../assets/category-1.png',
      id: '4',
    },
    {
      src: '../../assets/category-5.png',
      id: '5',
    },
    {
      src: '../../assets/category-1.png',
      id: '6',
    },
    {
      src: '../../assets/category-5.png',
      id: '7',
    },
  ];
  ngOnInit() {
    AOS.init();
  }
}
