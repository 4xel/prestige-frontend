import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {Md2Module} from "md2";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MaterialModule} from "@angular/material";
import "hammerjs";
import {AppComponent} from "./app.component";
import {PrestigeFeedComponent} from "./prestige/prestige-feed/prestige-feed.component";
import {EmployeeDetailComponent} from "./employee/employee-detail/employee-detail.component";
import {SearchComponent} from "./shared/search/search.component";
import {EmployeeRankingComponent} from "./employee/employee-ranking/employee-ranking.component";
import {PrestigeDetailComponent} from "./prestige/prestige-detail/prestige-detail.component";
import {EmployeeService} from "./providers/employee.service";
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "./firebase.config";
import {SortDatePipe} from "./shared/sort/sort-date.pipe";
import {AccountDetailComponent} from "./account/account-detail/account-detail.component";
import {AddPrestigeComponent} from "./prestige/add-prestige/add-prestige.component";
import {ListboxModule} from "primeng/components/listbox/listbox";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AccountService} from "./providers/account.service";
import {CategoryService} from "./providers/category.service";
import {PrestigeService} from "./providers/prestige.service";
import {SearchService} from "./providers/search.service";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeDetailComponent,
        EmployeeRankingComponent,
        PrestigeDetailComponent,
        PrestigeFeedComponent,
        SearchComponent,
        AccountDetailComponent,
        AddPrestigeComponent,
        SortDatePipe,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        Md2Module.forRoot(),
        NgbModule.forRoot(),
        AppRoutingModule,
        ListboxModule,
        FlexLayoutModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [
        EmployeeService,
        AccountService,
        CategoryService,
        PrestigeService,
        SearchService,
        {provide: LOCALE_ID, useValue: "nl-NL"}
    ],
    bootstrap: [AppComponent],
    entryComponents: [AccountDetailComponent, AddPrestigeComponent]
})
export class AppModule {
}
