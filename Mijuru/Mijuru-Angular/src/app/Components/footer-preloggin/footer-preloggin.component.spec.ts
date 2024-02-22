import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrelogginComponent } from './footer-preloggin.component';

describe('FooterPrelogginComponent', () => {
  let component: FooterPrelogginComponent;
  let fixture: ComponentFixture<FooterPrelogginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPrelogginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPrelogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
