import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.sass']
})
export class BrandsComponent implements OnInit {

  public brands = [
    'ache.png',
    'biol.png',
    'bistos.png',
    'brgoods.jpg',
    'curatec.gif',
    'denver.png',
    'dominguez.png',
    'hillrom.png',
    'ima.png',
    'klsmartin.gif',
    'krz.png',
    'liko.png',
    'mamute.png',
    'opuspac.svg',
    'richet.png',
    'steris.jpg',
    'tente.svg',
    'touchpoint.png',
    'trumpf.png',
    'welch.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
