import { Component, OnInit } from '@angular/core';
import { TermsService, Term } from '../../services/terms.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  public terms: Term[] = [];

  constructor(private termsService: TermsService){}

  ngOnInit() {
    this.termsService.fetchTerms().subscribe({
      next: res => {
        this.terms = res.data;
      },
      error: err => {
        console.warn("error fetching terms from localhost, check src/proxy.conf.json exists")
      }
    })
  }
}
