import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  homeImageList = [
    {image: 'assets/images/nature/1.jpg', title: 'Image 1', link: '/videos/item-1' },
    {image: 'assets/images/nature/4.jpg', title: 'Image 4', link: '/videos/item-2' },
    {image: 'assets/images/nature/5.jpg', title: 'Image 5', link: '/videos/item-3' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  preventNormal(event: MouseEvent, image: any) {
    if (!this.prevented) {
      event.preventDefault();
      // console.log(image.getAttribute('href'));
      // image.setAttribute('href', '/videos');
      // image.link = '/videos';
      // this.prevented = true;
      this.router.navigate(['/videos']);
    }
  }
}
