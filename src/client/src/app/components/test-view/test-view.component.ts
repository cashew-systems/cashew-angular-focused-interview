import { Component, OnInit } from '@angular/core';
import { TermsService, Term } from 'src/app/services/terms.service';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css']
})
export class TestViewComponent implements OnInit {
  public terms: Term[] = [];
  public myScore: number = 0;
  public viewing: number = 0;
  public completed: boolean = false;

  constructor(private termsService: TermsService) { }

  ngOnInit() {
    this.viewing = 0;
    this.completed = false;
    this.termsService.fetchTerms().subscribe({
      next: res => {
        this.terms = res.data;
      },
      error: err => {
        console.warn('fetch error')
      }
    })
  }

  public calcScore(score: number): void {
    this.myScore += score;
    this.viewing++;
    if(this.viewing >= this.terms.length) {
      this.completed = true;
    }
  }

}
