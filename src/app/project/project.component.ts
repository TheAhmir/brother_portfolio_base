import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { BackendService } from '../backend.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

/*
Project class structure..

Project has 5 parameters:
  - headling (Project title)
  - description
  - link to 
*/
export class ProjectComponent implements OnInit {
  projects: any[] = [];
  limit: number = 5; // Define the limit for the number of projects

  constructor(
    private backendService: BackendService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.backendService.getProjects().subscribe((result: { data: { projects: any; }; }) => {
      this.projects = (result?.data?.projects || []).map((project: { videoUrl: string | undefined; }) => ({
        ...project,
        safeVideoUrl: this.sanitizeUrl(project.videoUrl)
      }));
    });
  }

  // Sanitize the video URL
  private sanitizeUrl(url: string | undefined): SafeResourceUrl | undefined {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : undefined;
  }
}
