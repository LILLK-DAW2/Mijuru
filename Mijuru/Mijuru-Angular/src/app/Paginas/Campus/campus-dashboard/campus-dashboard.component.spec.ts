import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDashboardComponent } from './campus-dashboard.component';

describe('CampusDashboardComponent', () => {
  let component: CampusDashboardComponent;
  let fixture: ComponentFixture<CampusDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
