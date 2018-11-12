import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnDashboardPageComponent } from './admn-dashboard-page.component';

describe('AdmnDashboardPageComponent', () => {
  let component: AdmnDashboardPageComponent;
  let fixture: ComponentFixture<AdmnDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
