import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/interfaces/Character.interface';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];
  imageStatusDead: string = '../../../assets/Icono de muerto.png';
  imageStatusLived: string = '../../../assets/Icono de vivo.png';
  imageUnknown: string = '../../../assets/unknown.svg';
  imagePaisage: string = '../../../assets/image.svg';
  charactersDead: number = 0;
  totalCharacters: number = 0;
  allEpisodes: string[] = [];
  modalSwitch: boolean = false;
  @Input() imageModal: string = '';
  @Input() nameModal: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}

