import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjClass03Component } from './ej-class03.component';

describe('EjClass03Component', () => {
  let component: EjClass03Component;
  let fixture: ComponentFixture<EjClass03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjClass03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjClass03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
