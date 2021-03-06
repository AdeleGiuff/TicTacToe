import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadratoComponent } from './giocoTicTacToe/quadrato/quadrato.component';
import { GrigliaComponent } from './giocoTicTacToe/griglia/griglia.component';
import { HomeComponent } from './paginaHome/home/home.component';
import { PaginaGiocoComponent } from './giocoTicTacToe/pagina-gioco/pagina-gioco.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { grigliaReducer } from './giocoTicTacToe/griglia-stato-store/griglia.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BenvenutoTicComponent } from './pagineBenvenuto/benvenuto-tic/benvenuto-tic.component';
import { BenvenutoGuessComponent } from './pagineBenvenuto/benvenuto-guess/benvenuto-guess.component';
import { PaginaGiocoGuessComponent } from './giocoGuessTheMovie/pagina-gioco-guess/pagina-gioco-guess.component';
import { InserimentoLetteraComponent } from './giocoGuessTheMovie/inserimento-lettera/inserimento-lettera.component';
import { ComposizioneTitoloComponent } from './giocoGuessTheMovie/composizione-titolo/composizione-titolo.component';
import { InserimentoTitoloComponent } from './giocoGuessTheMovie/inserimento-titolo/inserimento-titolo.component';
import { GiocoGuessReducer } from './giocoGuessTheMovie/guess-stato-store/guess-reducer';

@NgModule({
  declarations: [
    AppComponent,
    QuadratoComponent,
    GrigliaComponent,
    HomeComponent,
    PaginaGiocoComponent,
    NavbarComponent,
    BenvenutoTicComponent,
    BenvenutoGuessComponent,
    PaginaGiocoGuessComponent,
    InserimentoLetteraComponent,
    ComposizioneTitoloComponent,
    InserimentoTitoloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot({
      griglia: grigliaReducer,
      giocoGuess: GiocoGuessReducer,
    }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
