import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { DiamondComponent } from './header/nav-drop-down/diamond/diamond.component';
import { WeddingRingComponent } from './header/nav-drop-down/wedding-ring/wedding-ring.component';
import { JewelryComponent } from './header/nav-drop-down/jewelry/jewelry.component';
import { GiftsComponent } from './header/nav-drop-down/gifts/gifts.component';
import { EngagementRingComponent } from './header/nav-drop-down/engagement-ring/engagement-ring.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DiamondComponent,
    JewelryComponent,
    GiftsComponent,
    EngagementRingComponent,
    WeddingRingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
