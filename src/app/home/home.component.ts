import { Component, OnInit } from '@angular/core';

import { news } from '../news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public news = [];

  constructor() { }

  ngOnInit(): void {
    this.news = news;
  }

}
