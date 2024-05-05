import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingRingComponent } from './wedding-ring.component';

describe('WeddingRingComponent', () => {
  let component: WeddingRingComponent;
  let fixture: ComponentFixture<WeddingRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingRingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeddingRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
