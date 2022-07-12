import { Character } from './../../models/interfaces/Character.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

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

  constructor(private dialogRef: MatDialog) { }

    openDialog() {
      this.dialogRef.open(PopUpComponent);
    }

  ngOnInit(): void {
    const API = 'https://rickandmortyapi.com/api/character';
    // obtengo datos utilizando fetch
    fetch(API)
    .then(response => response.json()).then(data => {
      this.characters = data.results;// <-- asigno los valores a la propiedad del componente
      console.log(this.characters);
    });

  }
  getLengthEpisodes() {

  }
  getCharactersDead() {
    this.characters.filter(character => character.status === 'Dead');
  }
  getCharactersLived() {
    return this.characters.filter(character => character.status === 'Alive');
  }
  getCharactersTotal() {
    return this.totalCharacters =  this.characters.length;
  }
  openModalWithId(id: number) {
    this.modalSwitch = true;
  }
  closeModal() {
    this.modalSwitch = false;
  }
}
