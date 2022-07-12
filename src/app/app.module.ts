import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleCharactersComponent } from './components/title-characters/title-characters.component';
import { SearchCharactersComponent } from './components/search-characters/search-characters.component';
import { TableCharactersComponent } from './components/table-characters/table-characters.component';
import { CharacterComponent } from './components/character/character.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { LoginComponent } from './components/pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleCharactersComponent,
    SearchCharactersComponent,
    TableCharactersComponent,
    CharacterComponent,
    PopUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
