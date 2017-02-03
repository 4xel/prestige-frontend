import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {SearchService} from "../../providers/search.service";
import {Observable} from "rxjs";

@Component({
  selector: 'search-employees',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent implements OnInit {

  employee = Observable;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.searchEmployees().subscribe(res => {
      this.employee = res;
      console.log(res, "res")
    })
  }

}
