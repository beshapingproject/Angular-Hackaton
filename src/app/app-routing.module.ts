import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { HistoryTicketComponent } from './pages/history-ticket/history-ticket.component';
import { OpenTicketComponent } from './pages/open-ticket/open-ticket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/ticket',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    redirectTo: 'pages/ticket',
    pathMatch: 'full',
  },
  {
    path: 'pages/ticket',
    component: FaqComponent,
  },
  {
    path: 'pages/ticket/new',
    component: OpenTicketComponent,
  },
  {
    path: 'pages/ticket/history',
    component: HistoryTicketComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
