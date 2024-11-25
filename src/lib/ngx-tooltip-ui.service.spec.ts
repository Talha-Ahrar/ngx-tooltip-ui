import { TestBed } from '@angular/core/testing';

import { TooltipService } from './ngx-tooltip-ui.service';

describe('NgxTooltipUiService', () => {
  let service: TooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
