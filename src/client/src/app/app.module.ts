import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TermsService } from './services/terms.service';
import { TermCardComponent } from './components/term-card/term-card.component';
import { TestViewComponent } from './components/test-view/test-view.component';
import { ReviewComponent } from './components/review/review.component';
import { CreateTermComponent } from './components/create-term/create-term.component';



@NgModule({
  declarations: [
    AppComponent,
    TermCardComponent,
    TestViewComponent,
    ReviewComponent,
    CreateTermComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TermsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
