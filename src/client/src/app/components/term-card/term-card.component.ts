import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-term-card',
  templateUrl: './term-card.component.html',
  styleUrls: ['./term-card.component.css']
})
export class TermCardComponent {
  public attempted: boolean = false;
  @Input() public term: any;
  @Input() public review: boolean | undefined;
  @Output() public score: EventEmitter<number> = new EventEmitter<number>()

  public correct: boolean = false;

  public checkDefinition(definition: string): void {
    this.attempted = true;
    this.correct = this.term.definition === definition;
    this.score.emit(this.correct ? 1 : 0);
  }

}
