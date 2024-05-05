import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementRingComponent } from './engagement-ring.component';

describe('EngagementRingComponent', () => {
  let component: EngagementRingComponent;
  let fixture: ComponentFixture<EngagementRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementRingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngagementRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
