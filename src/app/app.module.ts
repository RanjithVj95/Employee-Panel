import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeDetailsComponent } from './Component/employe-details/employe-details.component';
import { EmployeSummaryComponent } from './Component/employe-summary/employe-summary.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllowOnlyCharDirective } from './directives/allow-only-char.directive';
import { AllowOnlyNumberDirective } from './directives/allow-only-number.directive';
import { DatePipe } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';
import { SortDirective } from './directives/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeDetailsComponent,
    EmployeSummaryComponent,
    HeaderComponent,
    FooterComponent,
    AllowOnlyCharDirective,
    AllowOnlyNumberDirective,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
