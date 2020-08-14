import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { news } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  public news = [];
  public item;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      this.news = news;
      const { uid } = value;
      if (uid) {
        this.item = this.news.find((_item) => _item.uid === uid);
      }
    });
  }
}
