import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from '../../models/project';
import { ProjectComponent } from '../project/project.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {


}
