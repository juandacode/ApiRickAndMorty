import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.css']
})
export class SearchCharactersComponent implements OnInit {
  imageStatusDead: string = '../../assets/Icono de muerto.png';
  imageStatusLived: string = '../../assets/Icono de vivo.png';

  textCharactersLived: string = "personajes vivos";
  textCharactersDead: string = "personajes muertos";
  iconStyle = {
    width: '1.4rem',
    height: '1.4rem',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
