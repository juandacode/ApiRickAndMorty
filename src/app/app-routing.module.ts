import { PreloadAllModules, PreloadingStrategy } from '@angular/router';

import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { AuthenticationComponent } from './components/pages/authentication/authentication.component';
import { CharacterDetailComponent } from './components/pages/character-detail/character-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  {path: 'character/:id', component: CharacterDetailComponent },
  { path: 'pass', component: AuthenticationComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
