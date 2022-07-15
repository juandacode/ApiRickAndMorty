import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/interfaces/Character.interface';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.css'],
})
export class SearchCharactersComponent implements OnInit {
  imageStatusDead: string = '../../assets/Icono de muerto.png';
  imageStatusLived: string = '../../assets/Icono de vivo.png';

  charactersDead: number = 0;
  charactersLived: number = 0;
  allCharacters: number = 0;

  textCharactersLived: string = 'personajes vivos';
  textCharactersDead: string = 'personajes muertos';
  iconStyle = {
    width: '1.4rem',
    height: '1.4rem',
  };
  inputSearch: string = '';
  @Output() searchCharacters = new EventEmitter<string>();
  constructor(private characterService: CharacterService) {}

ngOnInit(): void {
  this.characterService.getCharacters().subscribe((data) => {
    this.allCharacters = data.results.length;
  });

  this.characterService.getCharacters().subscribe((data) => {
      this.charactersDead = data.results.filter(
        (character) => character.status === 'Dead').length;
  });

  this.characterService.getCharacters().subscribe((data) => {
    this.charactersLived = data.results.filter(character =>
      character.status === 'Alive').length;
  });
}

  onSearch() {
    this.searchCharacters.emit(this.inputSearch);
  }
}
