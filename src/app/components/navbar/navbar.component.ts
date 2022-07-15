import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoRickAndMorty = '../../assets/Logo-RandM.png';
  iconHome: string = '../../assets/Home.png';
  iconBell: string = '../../assets/Icono de campana.png';
  iconHeart: string = '../../assets/heart.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
