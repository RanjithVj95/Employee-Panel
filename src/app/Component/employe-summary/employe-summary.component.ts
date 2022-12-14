import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-summary',
  templateUrl: './employe-summary.component.html',
  styleUrls: ['./employe-summary.component.css']
})
export class EmployeSummaryComponent implements OnInit {

  employeDetail:any = [];
  page = 1;
  pageSize = 5;
  pageOfItems: Array<any> = [];
  properties: any;
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("employeDetails")){
      this.employeDetail = JSON.parse(sessionStorage.getItem("employeDetails") || '{}')
    }
  }
  clearAll(){
    sessionStorage.removeItem("employeDetails");
    this.employeDetail = []
  }
  onPageSizeChange(value:any) {
    this.pageSize = value;
    this.page = 1;
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
  handlePageChange(event:any) {
    this.page = event;
  }
}
