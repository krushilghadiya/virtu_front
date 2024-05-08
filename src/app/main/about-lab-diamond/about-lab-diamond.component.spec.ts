import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLabDiamondComponent } from './about-lab-diamond.component';

describe('AboutLabDiamondComponent', () => {
  let component: AboutLabDiamondComponent;
  let fixture: ComponentFixture<AboutLabDiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLabDiamondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutLabDiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
