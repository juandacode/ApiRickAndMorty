import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-characters',
  templateUrl: './title-characters.component.html',
  styleUrls: ['./title-characters.component.css']
})
export class TitleCharactersComponent implements OnInit {
  cameraMovie: string = '../../assets/camera-movie.png';
  constructor() { }

  ngOnInit(): void {
  }

}
