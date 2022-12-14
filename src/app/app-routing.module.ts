import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeDetailsComponent } from './Component/employe-details/employe-details.component';
import { EmployeSummaryComponent } from './Component/employe-summary/employe-summary.component';

const routes: Routes = [
  { path: "", component: EmployeDetailsComponent },
  { path: "employe_summary", component: EmployeSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
