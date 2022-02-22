import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestComComponent } from './gest-com.component';

describe('GestComComponent', () => {
  let component: GestComComponent;
  let fixture: ComponentFixture<GestComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
