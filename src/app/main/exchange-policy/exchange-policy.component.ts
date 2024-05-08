import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-exchange-policy',
  templateUrl: './exchange-policy.component.html',
  styleUrl: './exchange-policy.component.scss',
})
export class ExchangePolicyComponent {
  mail = '';
  mobileNumber!: number;
  dataSource = [
    {
      category: 'Diamond Jewellery',
      exchangeValue: 'Full Gold value at current market rate',
      buyBackValue: 'Full Gold value at current market rate',
    },
    {
      category: '',
      exchangeValue: 'Full Diamond value at current market rate',
      buyBackValue: '80% Diamond value at current market rate',
      secondValueOne: '(on exchange date)',
      secondValueTwo: '(on buy back date)',
    },
    {
      category: 'Loose Solitaires',
      exchangeValue: 'Full Gold value at current market rate',
      buyBackValue: 'Full Gold value at current market rate',
      secondValueOne: '(on exchange date)',
      secondValueTwo: '(on buy back date)',
    },
    {
      category: 'Plain Gold Jewellery',
      exchangeValue: 'Full Gold value at current market rate',
      buyBackValue: 'Full Gold value at current market rate',
      secondValueOne: '(on exchange date)',
      secondValueTwo: '(on buy back date)',
    },
    {
      category: 'Coins',
      exchangeValue: 'Full Gold/Silver value at current market rate',
      buyBackValue: 'Full Gold/Silver value at current market rate',
      secondValueOne: '(on exchange date)',
      secondValueTwo: '(on buy back date)',
    },
  ];
  displayedColumns = ['category', 'exchangeValue', 'buyBackValue'];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.mail = this.sharedService.mail
    this.mobileNumber = this.sharedService.mobileNumber
  }
}
