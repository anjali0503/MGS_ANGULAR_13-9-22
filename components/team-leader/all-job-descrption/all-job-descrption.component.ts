import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { Login } from 'src/app/domain/login';
import { GetLoginDetailsService } from 'src/app/services/get-login-details.service';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-all-job-descrption',
  templateUrl: './all-job-descrption.component.html',
  styleUrls: ['./all-job-descrption.component.css']
})
export class AllJobDescrptionComponent implements OnInit {
  employee: EmployeeDetails = new EmployeeDetails();
  login: Login = new Login();
  allJobDescription: JobDescriptionDetails[] = [];

  constructor(private jobDescriptionService: JobDescriptionService,
    private getLoginDetails: GetLoginDetailsService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.getLoginDetails.getEmployeeDetails(this.login.loginId).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
      
      this.jobDescriptionService.getAllJobDescription(this.employee.employeeId).subscribe(
        data => {
          console.log("in reload data");

          this.allJobDescription = data;
          console.log(this.allJobDescription);


        }
      );
    });

  }

  reloadData(){
    this.jobDescriptionService.getAllJobDescription(this.employee.employeeId).subscribe(
      data=> {
        this.allJobDescription=data;
        console.log(this.allJobDescription);
        
      }
    );
    
  }

}
