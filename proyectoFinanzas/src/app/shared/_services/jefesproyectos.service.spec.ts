import { TestBed } from '@angular/core/testing';

import { JefesproyectosService } from './jefesproyectos.service';

describe('JefesproyectosService', () => {
  let service: JefesproyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JefesproyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
