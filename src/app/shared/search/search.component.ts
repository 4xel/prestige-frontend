import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {SearchService} from "../../providers/search.service";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'search-employees',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SearchComponent implements OnInit {

  searchTerm = new FormControl();
  searchResult: any[] = [];

  constructor(private router: Router, private searchService: SearchService) {
  }

    ngOnInit() {
        this.searchTerm.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .do(val => { if (val && !(val.length > 0)) {this.clearSearchResults();} })
            .filter(val => { if (val) { return val.length > 0 } })
            .do(() => this.clearSearchResults())
            .switchMap(searchTerm => this.searchService.searchEmployee(searchTerm))
            .subscribe(searchOutput => {
                this.searchResult.push(searchOutput);
            });
    }

  private clearSearchResults() {
    this.searchResult = []
  }

  public openEmployeeDetailWithId(employee){
      this.searchTerm.reset();
      this.clearSearchResults();
      this.router.navigate(['employee-detail', employee.id]);
  }
}
