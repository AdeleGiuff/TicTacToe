import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginaHome/home/home.component';
import { PaginaGiocoComponent } from './giocoTicTacToe/pagina-gioco/pagina-gioco.component';
import { BenvenutoTicComponent } from './pagineBenvenuto/benvenuto-tic/benvenuto-tic.component';
import { BenvenutoGuessComponent } from './pagineBenvenuto/benvenuto-guess/benvenuto-guess.component';
import { PaginaGiocoGuessComponent } from './giocoGuessTheMovie/pagina-gioco-guess/pagina-gioco-guess.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'giocobenvenutotic',
    component: BenvenutoTicComponent,
  },
  {
    path: 'giocobenvenutoguess',
    component: BenvenutoGuessComponent,
  },
  {
    path: 'giocoguess',
    component: PaginaGiocoGuessComponent,
  },
  {
    path: 'giocotic',
    component: PaginaGiocoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
