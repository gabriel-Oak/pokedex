import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'not-found',
    loadChildren: './containers/not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'pokemons',
    loadChildren: './containers/pokemons/pokemons.module#PokemonsModule'
  },
  {
    path: '',
    loadChildren: './containers/pokemons/pokemons.module#PokemonsModule'
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
