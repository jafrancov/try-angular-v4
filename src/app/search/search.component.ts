import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchLocation = 'Waaa';
  // searchQuery = 'New search';

  constructor() { }

  ngOnInit() {
  }

  submitSearch(event, formData) {
    console.log(event);
    console.log(formData.value);
  }

  searchQueryChange() {
    this.searchLocation = 'Irapuato';
  }

}
