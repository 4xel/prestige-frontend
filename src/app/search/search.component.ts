import {Component} from "@angular/core";


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  employees: any[] = ['Michael', 'Pieter', 'Tom', 'Joris', 'Ines', 'Dries', 'Ruben', 'Tim'];
}
