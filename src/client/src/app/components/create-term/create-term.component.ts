import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TermsService, Term } from '../../services/terms.service';

@Component({
  selector: 'app-create-term',
  templateUrl: './create-term.component.html',
  styleUrls: ['./create-term.component.css']
})
export class CreateTermComponent {
  constructor( private termsService: TermsService, private router: Router ) {}
  save(term: string, definition: string) {
    this.termsService.addTerm(term, definition).subscribe({
      next: res => {
        console.log(res, this.router)
        this.router.navigate(['/test']);
      },
      error: err => {
        console.warn(err);
        this.router.navigate(['/test']);
      }
    });
  }
}
