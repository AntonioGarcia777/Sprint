import { TestBed } from '@angular/core/testing';

import { PanelPreciosService } from './panel-precios.service';

describe('PanelPreciosService', () => {
  let service: PanelPreciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelPreciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
