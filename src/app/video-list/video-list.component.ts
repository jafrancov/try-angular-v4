import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Video list';
  // videoList = ['item 1', 'item 2', 'item 3'];
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

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  getEmbedURL(item) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed);
  }
}
