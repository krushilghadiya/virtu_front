import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MatIcon],
  exports: [FooterComponent],
})
export class FooterModule {}
