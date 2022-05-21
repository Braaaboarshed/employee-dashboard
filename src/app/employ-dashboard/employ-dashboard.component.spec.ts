import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployDashboardComponent } from './employ-dashboard.component';

describe('EmployDashboardComponent', () => {
  let component: EmployDashboardComponent;
  let fixture: ComponentFixture<EmployDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
