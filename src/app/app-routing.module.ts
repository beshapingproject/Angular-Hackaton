import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTicketComponent } from './pages/details-ticket/details-ticket.component';
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
  {
    path: 'pages/ticket/details/:id',
    component: DetailsTicketComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
