import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
