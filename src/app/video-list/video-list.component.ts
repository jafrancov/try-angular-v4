import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  private req: any;
  title = 'Video list';
  // videoList = ['item 1', 'item 2', 'item 3'];
  todayDate;
  videoList: [any];

  constructor(private httpClient: HttpClient ) {
  }

  ngOnInit() {
    this.todayDate = Date();
    this.req = this.httpClient.get('/assets/json/videos.json').subscribe(data => {
      console.log(data);
      this.videoList = data as [any];
      // console.log(this.videoList[0].name);
    });
  }

  getEmbedURL(item) {
    return 'https://www.youtube.com/embed/' + item.embed;
  }


  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
