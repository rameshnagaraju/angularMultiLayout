import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnDashboardNavComponent } from './admn-dashboard-nav.component';

describe('AdmnDashboardNavComponent', () => {
  let component: AdmnDashboardNavComponent;
  let fixture: ComponentFixture<AdmnDashboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnDashboardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnDashboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
