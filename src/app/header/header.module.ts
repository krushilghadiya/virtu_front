import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DiamondComponent } from './nav-drop-down/diamond/diamond.component';
import { EngagementRingComponent } from './nav-drop-down/engagement-ring/engagement-ring.component';
import { GiftsComponent } from './nav-drop-down/gifts/gifts.component';
import { JewelryComponent } from './nav-drop-down/jewelry/jewelry.component';
import { WeddingRingComponent } from './nav-drop-down/wedding-ring/wedding-ring.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DiamondComponent,
    JewelryComponent,
    GiftsComponent,
    EngagementRingComponent,
    WeddingRingComponent,
  ],
  imports: [CommonModule, MatIconModule, MatExpansionModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
