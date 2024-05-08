import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { ExchangePolicyComponent } from './exchange-policy/exchange-policy.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { AboutLabDiamondComponent } from './about-lab-diamond/about-lab-diamond.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { RingSizeGuideComponent } from './ring-size-guide/ring-size-guide.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home-page/home-page.module').then(
            (mod) => mod.HomePageModule
          ),
      },
      {
        path: 'exchange-policy',
        component: ExchangePolicyComponent,
      },
      {
        path: 'shipping-policy',
        component: ShippingPolicyComponent,
      },
      {
        path: 'about-lab-diamond',
        component: AboutLabDiamondComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'return-policy',
        component: ReturnPolicyComponent,
      },
      {
        path: 'ring-size-guide',
        component: RingSizeGuideComponent,
      },
      {
        path: 'terms-condition',
        component: TermsConditionComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    ExchangePolicyComponent,
    ShippingPolicyComponent,
    AboutLabDiamondComponent,
    AboutUsComponent,
    BlogComponent,
    PrivacyPolicyComponent,
    ReturnPolicyComponent,
    RingSizeGuideComponent,
    TermsConditionComponent,
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    MatTableModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MainModule {}
