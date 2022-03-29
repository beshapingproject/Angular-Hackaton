import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { FirstSectionComponent } from './faq/first-section/first-section.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './faq/first-section/details/details.component';
import { QuestionsComponent } from './faq/first-section/details/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FaqComponent,
    FirstSectionComponent,
    DetailsComponent,
    QuestionsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
