import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  mail = 'support@virtuestar.com';
  mobileNumber = 918490096181;
  headerHeight = new Subject<number>();
  constructor() {}
}
