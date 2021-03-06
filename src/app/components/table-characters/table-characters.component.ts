import { Character } from './../../models/interfaces/Character.interface';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-table-characters',
  templateUrl: './table-characters.component.html',
  styleUrls: ['./table-characters.component.css']
})
export class TableCharactersComponent implements OnInit {
  characters: Character[] = [];

  imageStatusDead: string = '../../../assets/Icono de muerto.png';
  imageStatusLived: string = '../../../assets/Icono de vivo.png';
  imageUnknown: string = '../../../assets/unknown.svg';
  imagePaisage: string = '../../../assets/image.svg';
  charactersDead: number = 0;
  totalCharacters: number = 0;
  allEpisodes: string[] = [];
  modalSwitch: boolean = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data) => {
        this.characters = data.results;
        console.log(data);
      });
      // Método Fetch. Prueba App Inicial
      // Obtención de datos utilizando fetch
    /* const API = 'https://rickandmortyapi.com/api/character';
    fetch(API)
    .then(response => response.json()).then(data => {
      this.characters = data.results;// <-- asigno los valores a la propiedad del componente
      console.log(this.characters);
    }); */

  }
  getLengthEpisodes() {

  }
  getCharactersTotal() {
    return this.totalCharacters =  this.characters.length;
  }
  closeModal() {
    this.modalSwitch = false;
  }
}
