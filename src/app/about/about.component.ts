import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { BackendService } from '../backend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss', 
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  about: any;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getAbout().subscribe((result: { data: { abouts: any } }) => {
      this.about = result?.data?.abouts[0]

      console.log(this.about);
    });
  }
}
