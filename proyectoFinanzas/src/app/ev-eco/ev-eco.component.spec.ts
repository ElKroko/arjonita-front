import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvEcoComponent } from './ev-eco.component';

describe('EvEcoComponent', () => {
  let component: EvEcoComponent;
  let fixture: ComponentFixture<EvEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvEcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
