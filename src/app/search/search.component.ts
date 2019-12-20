import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchLocation = 'Waaa';
  searchQuery: string;

  @Input()
  passedQuery: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Init: ' + this.passedQuery);
    console.log('Init: ' + this.searchQuery);
    if (this.passedQuery) {
      this.searchQuery = this.passedQuery;
    }
  }


  submitSearch(event, formData) {
    // console.log(event);
    // console.log(formData.value);
    // console.log(this.passedQuery);
    console.log('Submit: ' + this.passedQuery);
    console.log('Submit: ' + this.searchQuery);
    const searchedQuery = formData.value.q;
    if (searchedQuery) {
      this.router.navigate(['/search', {q: searchedQuery}]);
    }
  }

  searchQueryChange() {
    console.log('Change: ' + this.passedQuery);
    console.log('Change: ' + this.searchQuery);
    // this.searchLocation = 'Irapuato';
    // if (this.passedQuery) {
    //   this.searchQuery = this.passedQuery
    // }
  }

}
