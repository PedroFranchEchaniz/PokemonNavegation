import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { BerriesListComponent } from './component/berries-list/berries-list.component';
import { PokemonDetailComponent } from './component/pokemon-detail/pokemon-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BerriesDetailComponent } from './component/berries-detail/berries-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    BerriesListComponent,
    PokemonDetailComponent,
    BerriesDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
