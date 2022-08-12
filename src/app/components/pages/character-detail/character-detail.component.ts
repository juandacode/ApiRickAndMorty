import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { switchMap } from 'rxjs';
import { Character } from 'src/app/models/interfaces/Character.interface';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  characterId: string |  null = null;
  character: Character |  null = null;
  heartImage: string = '../../../../assets/heart.svg';
  bannerImage: string = '../../../../assets/banner.jpg';
  constructor(private route: ActivatedRoute,
              private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.route.paramMap
    .pipe(
      switchMap(params => {
      this.characterId = params.get('id');
      console.log(params.get('id'));
      if(this.characterId) {
        return this.characterService.GetCharacter(this.characterId)
    }
    return [];
    }))
    .subscribe(character => {
      this.character = character;
      console.log(character);
    });
  }

}
