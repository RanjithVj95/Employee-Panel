import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

 
  employeDetails!:FormGroup;
  maxDate:any;
  submitted = false;
  constructor(private formBuilder:FormBuilder,private route: Router,private datepipe:DatePipe) { }

  ngOnInit() {
    this.maxDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    this.createEmployeDetails()
  }
  createEmployeDetails() {
    this.employeDetails = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.employeDetails.invalid) {
      return;
    }
   else{
    let result = [];
    if(sessionStorage.getItem("employeDetails")){
      result = JSON.parse(sessionStorage.getItem("employeDetails") || '[]')
    }
    
    result.push(this.employeDetails.value)
    sessionStorage.setItem("employeDetails",JSON.stringify(result));
    this.route.navigateByUrl("/employe_summary")
   }
  }
  clearAll(){
    this.createEmployeDetails()
  }

}
