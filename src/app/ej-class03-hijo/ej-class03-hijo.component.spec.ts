import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjClass03HijoComponent } from './ej-class03-hijo.component';

describe('EjClass03HijoComponent', () => {
  let component: EjClass03HijoComponent;
  let fixture: ComponentFixture<EjClass03HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjClass03HijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjClass03HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
