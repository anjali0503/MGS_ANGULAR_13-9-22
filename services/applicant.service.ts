import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../domain/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  applicantDetails:Applicant=new Applicant();
  applicantDetailsArray:Applicant[]=[];
  private baseURL: string = "http://localhost:8080/applicantdetailsapi";
  constructor(private httpClient: HttpClient) { }

  apply(applicantDetails:Applicant): Observable<Applicant> {
    console.log("in add new job");
    console.log(applicantDetails);
    return this.httpClient.post<Applicant>(this.baseURL + "/addapplicant", applicantDetails);
}
 


  getApplicant(jobId:number): Observable<Applicant[]> {
    console.log("in getApplicant()");
    console.log(jobId);
    return this.httpClient.get<Applicant[]>(this.baseURL + "/ViewApplicant/"+jobId);
   
    
  }
}
