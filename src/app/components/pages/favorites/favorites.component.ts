import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    /* onShowFavorite(id: number) {
      this.characterService.getCharacter(id).
      subscribe((favorite) => {
        console.log(favorite);
      });
    } */
  }

}
