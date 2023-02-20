import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Term {
  term: string,
  definition: string
}

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  private terms: Term[] = [];
  constructor( private http: HttpClient) { }

  fetchTerms(): Observable<any> {
     return this.http.get('/api/users');
  }

  addTerm(term: string, definition: string): Observable<any> {
    return this.http.post('/api/users', {term, definition} );
 }

}
