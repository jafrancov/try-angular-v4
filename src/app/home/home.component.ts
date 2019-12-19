import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  private req: any;
  homeImageList = [
    // {image: 'assets/images/nature/1.jpg', name: 'Image 1', slug: 'item-1' },
    // {image: 'assets/images/nature/4.jpg', name: 'Image 4', slug: 'item-2' },
    // {image: 'assets/images/nature/5.jpg', name: 'Image 5', slug: 'item-3' },
  ];

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.req = this.httpClient.get('/assets/json/videos.json').subscribe(data => {
      // console.log(data);
      // this.homeImageList = data as [any];
      // console.log(this.videoList[0].name);
      for (const i of data[Symbol.iterator]()) {
          if (i.featured) {
            this.homeImageList.push(i);
          }
        }
    });
  }

  preventNormal(event: MouseEvent, image: any) {
    // if (!this.prevented) {
    if (image.prevented) {
      event.preventDefault();
      // console.log(image.getAttribute('href'));
      // image.setAttribute('href', '/videos');
      // image.link = '/videos';
      // this.prevented = true;
      this.router.navigate(['./videos']);
    }
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
