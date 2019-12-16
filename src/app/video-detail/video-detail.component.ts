import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  private req: any;
  slug: string;
  video: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      // this.slug = params['slug'];
      this.slug = params.slug;
      this.http.get('/assets/json/videos.json').subscribe(data => {
        // console.log(data);
        for (const i of data[Symbol.iterator]()) {
          if (i.slug.endsWith(this.slug)) {
            this.video = i;
          }
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }
}
