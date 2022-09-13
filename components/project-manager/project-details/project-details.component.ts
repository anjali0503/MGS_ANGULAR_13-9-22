import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetails } from 'src/app/domain/project';
import { ProjectDetailsService } from 'src/app/services/project-details.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
projectDetails:ProjectDetails = new ProjectDetails();
allproject:ProjectDetails[]=[];
  constructor(private projectService:ProjectDetailsService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("in projectDeatilsComponent");
    this.reloadData();
    // this.projectId= this.activatedRoute.snapshot.params['projectId'];
    // this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
   
    
  }

  reloadData(){
    // this.projectService.getProject().subscribe(
    //   data=>{
    //     this.allproject=data;
    //     console.log(this.allproject);
        
    //   }
    // );
  }

}
