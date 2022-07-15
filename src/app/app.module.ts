import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Modulos Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// Routes
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleCharactersComponent } from './components/title-characters/title-characters.component';
import { SearchCharactersComponent } from './components/search-characters/search-characters.component';
import { TableCharactersComponent } from './components/table-characters/table-characters.component';
import { CharacterComponent } from './components/character/character.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/forms/signup/signup.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleCharactersComponent,
    SearchCharactersComponent,
    TableCharactersComponent,
    CharacterComponent,
    PopUpComponent,
    LoginComponent,
    SignupComponent,
    FavoritesComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
