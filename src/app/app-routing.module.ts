import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { BerriesListComponent } from './component/berries-list/berries-list.component';

const routes: Routes = [
  { path: 'pokemonList', component: PokemonListComponent },
  { path: 'berryList', component: BerriesListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pokemonList' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
