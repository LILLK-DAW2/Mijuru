import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPrelogginComponent } from './nav-bar-preloggin.component';

describe('NavBarPrelogginComponent', () => {
  let component: NavBarPrelogginComponent;
  let fixture: ComponentFixture<NavBarPrelogginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPrelogginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarPrelogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
