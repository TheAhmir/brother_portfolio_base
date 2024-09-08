import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [PdfViewerModule, FooterComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  pdfSrc = 'assets/pdfs/Ahmad_Resume.pdf';

}
