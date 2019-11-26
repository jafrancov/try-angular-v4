import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Video list';
  // videoList = ['item 1', 'item 2', 'item 3'];
  todayDate;
  videoList = [
    {
      name: 'item 1',
      slug: 'videos/item-1',
      embed: 'xNgQOHwsIbg',
    },
    {
      name: 'item 2',
      slug: 'videos/item-2',
      embed: 'xNgQOHwsIbg',
    },
    {
      name: 'item 3',
      slug: 'videos/item-3',
      embed: null,
     },
  ];

  constructor() {
  }

  ngOnInit() {
    this.todayDate = Date();
  }

  getEmbedURL(item) {
    return 'https://www.youtube.com/embed/' + item.embed;
  }
}
