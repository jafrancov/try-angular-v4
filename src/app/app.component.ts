import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `{{title}} is cool`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Hello Alex';
  private routeSub: any;
  query: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params.q;
      // console.log(this.query);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
