import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FirstSectionComponent } from './pages/faq/first-section/first-section.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/faq/first-section/details/details.component';
import { QuestionsComponent } from './pages/faq/first-section/details/questions/questions.component';
import { PagesComponent } from './pages/pages.component';
import { OpenTicketComponent } from './pages/open-ticket/open-ticket.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FaqComponent,
    FirstSectionComponent,
    DetailsComponent,
    QuestionsComponent,
    PagesComponent,
    OpenTicketComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
