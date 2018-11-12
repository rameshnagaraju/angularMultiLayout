import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPlaceholderComponent } from './body-placeholder.component';

describe('BodyPlaceholderComponent', () => {
  let component: BodyPlaceholderComponent;
  let fixture: ComponentFixture<BodyPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
