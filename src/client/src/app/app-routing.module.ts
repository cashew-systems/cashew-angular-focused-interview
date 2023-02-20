import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestViewComponent } from './components/test-view/test-view.component';
import { ReviewComponent } from './components/review/review.component';
import { CreateTermComponent } from './components/create-term/create-term.component';

const routes: Routes = [
  { path: 'test', component: TestViewComponent },
  { path: 'create', component: CreateTermComponent},
  { path: '**', component: ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
