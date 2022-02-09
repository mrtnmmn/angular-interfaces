import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjClass01Component } from './ej-class01.component';

describe('EjClass01Component', () => {
  let component: EjClass01Component;
  let fixture: ComponentFixture<EjClass01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjClass01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjClass01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
