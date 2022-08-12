import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Character } from '../../models/interfaces/Character.interface'
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Output() favoriteId = new EventEmitter<number>();
  @Input() favorite: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    episode: [],
    created: '',
    image: '',
  };
  constructor() { }

  ngOnInit(): void {

  }


}
