import { Applicant } from "./applicant";
import { EmployeeDetails } from "./employee";

export class Interviewer{
    interviewId:number=0;
    applicantDetails:Applicant=new Applicant();
    employeeDetails:EmployeeDetails=new EmployeeDetails();
    status:string="";
    round1:string="";
    round2:string="";
    round3:string="";
}





