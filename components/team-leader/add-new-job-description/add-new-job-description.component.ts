import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { Login } from 'src/app/domain/login';
import { GetLoginDetailsService } from 'src/app/services/get-login-details.service';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-add-new-job-description',
  templateUrl: './add-new-job-description.component.html',
  styleUrls: ['./add-new-job-description.component.css']
})
export class AddNewJobDescriptionComponent implements OnInit {
  employee: EmployeeDetails = new EmployeeDetails();
  login: Login = new Login();
  jobdescription: JobDescriptionDetails = new JobDescriptionDetails();
  submitted: boolean = false;
  constructor(private jobDescriptionService: JobDescriptionService,
    private getLoginServices: GetLoginDetailsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.getLoginServices.getEmployeeDetails(this.login.loginId).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    }
    ); 
  }

  addJobDescription() {
    console.log("in addJobDescription()");
    this.jobdescription.employeeDetails=this.employee;
    this.jobdescription.projectDetails=this.employee.projectDetails;
    console.log(this.jobdescription);
    this.jobdescription.jobStatus='Pending';
    // this.jobdescription.EmployeeId=this.emp
    this.jobDescriptionService.addJobDescription(this.jobdescription).subscribe(
      data => {
        this.jobdescription = data;
        console.log(this.addJobDescription);


      })

  }
  backtohome() {
    console.log("backtohome()");
    this.router.navigate(['']);


  }
}