import {Injectable} from '@angular/core';
import {AngularFire} from  'angularfire2';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/merge';

import {Observable} from "rxjs";

@Injectable()
export class SearchService {

  employees: any;

  constructor(private af: AngularFire) {
    this.employees = this.af.database.object('/employees')
      .map(result => result);
  }

  public searchEmployee(searchTerm: any) {
    return this.employees
      .flatMap(Observable.from)
      .filter((employee) => employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
  }

  public searchEmployees() {
    return this.af.database.list('/employees')
  }

}
