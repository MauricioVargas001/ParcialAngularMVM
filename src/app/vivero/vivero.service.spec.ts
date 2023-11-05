/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViveroService } from './vivero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Vivero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViveroService]
    });
  });

  it('should ...', inject([ViveroService], (service: ViveroService) => {
    expect(service).toBeTruthy();
  }));
});
