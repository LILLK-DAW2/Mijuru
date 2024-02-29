import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusIconoComponent } from './campus-icono.component';

describe('CampusIconoComponent', () => {
  let component: CampusIconoComponent;
  let fixture: ComponentFixture<CampusIconoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusIconoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusIconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
