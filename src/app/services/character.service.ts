import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Data, Character } from '../models/interfaces/Character.interface';
/* import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; */

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<Data>(this.apiUrl);
  }
  GetCharacter(id: string) {
    return this.http.get<Character>( `${this.apiUrl}/${id}`)
    /* .pipe(
      catchError((error: HttpErrorResponse) => {
      if(error.status === HttpStatusCode.NotFound) {
          return throwError("No se encontró el personaje");
      });
    );*/
  }
  create(dto: /* CharacterDTO */ any) {
    return this.http.post<Character>(this.apiUrl, dto);
  }
  update(id: number, dto: any) {
    return this.http.put<Character>(`${this.apiUrl}/${id}`, dto);
  }
}
