import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  projectId!: string;
  project: any;

  constructor(private route: ActivatedRoute, private backendService: BackendService,) {}

  ngOnInit(): void {
    // Get the project id from the URL
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    
    this.backendService.getProjectById(this.projectId).subscribe({
      next: (result: any) => {
        this.project = result?.data?.project || undefined;
      },
      error: (error) => {
        console.error('Error fetching project details:', error);
      }
    });
    }
  }
