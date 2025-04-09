import { TestBed } from '@angular/core/testing';
import { HttpPersonService } from './http-person.service';
import { provideHttpClient } from '@angular/common/http';

describe('HttpPersonService', () => {
  let service: HttpPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
      ],
    });
    service = TestBed.inject(HttpPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
