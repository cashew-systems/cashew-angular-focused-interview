import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TermsService, Term } from './terms.service';



describe('TermsService', () => {
  let service: TermsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TermsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
