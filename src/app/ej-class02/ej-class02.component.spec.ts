import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjClass02Component } from './ej-class02.component';

describe('EjClass02Component', () => {
  let component: EjClass02Component;
  let fixture: ComponentFixture<EjClass02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjClass02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjClass02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
