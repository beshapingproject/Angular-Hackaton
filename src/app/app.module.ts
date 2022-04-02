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
import { HistoryTicketComponent } from './pages/history-ticket/history-ticket.component';
import { HistoryTableComponent } from './pages/history-ticket/history-table/history-table.component';
import { HistoryTableRowComponent } from './pages/history-ticket/history-table/history-table-row/history-table-row.component';
import { DetailsTicketComponent } from './pages/details-ticket/details-ticket.component';
import { DetailsInfoComponent } from './pages/details-ticket/details-info/details-info.component';
import { ChatMessagesComponent } from './pages/details-ticket/chat-messages/chat-messages.component';

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
    HistoryTicketComponent,
    HistoryTableComponent,
    HistoryTableRowComponent,
    DetailsTicketComponent,
    DetailsInfoComponent,
    ChatMessagesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
