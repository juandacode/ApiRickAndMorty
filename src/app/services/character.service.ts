import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Data } from '../models/interfaces/Character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<Data>('https://rickandmortyapi.com/api/character');
  }
 
 /*  getCharactersLived() {
    return this.characters.filter(character => character.status === 'Alive');
  } */

}
