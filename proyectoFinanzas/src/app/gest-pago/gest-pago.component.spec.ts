import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestPagoComponent } from './gest-pago.component';

describe('GestPagoComponent', () => {
  let component: GestPagoComponent;
  let fixture: ComponentFixture<GestPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
