import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusNavbarComponent } from './campus-navbar.component';

describe('CampusNavbarComponent', () => {
  let component: CampusNavbarComponent;
  let fixture: ComponentFixture<CampusNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
