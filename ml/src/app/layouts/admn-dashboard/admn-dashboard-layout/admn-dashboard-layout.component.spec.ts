import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnDashboardLayoutComponent } from './admn-dashboard-layout.component';

describe('AdmnDashboardLayoutComponent', () => {
  let component: AdmnDashboardLayoutComponent;
  let fixture: ComponentFixture<AdmnDashboardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnDashboardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
