import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class Project {
  headline: string;
  description: string;
  videoUrl?: string;
  safeVideoUrl?: SafeResourceUrl;
  images?: string[];
  link: string;

  constructor(
    headline: string,
    description: string,
    link: string,
    videoUrl?: string,
    images?: string[],
    private sanitizer?: DomSanitizer,
  ) {
    this.headline = headline;
    this.description = description;
    this.videoUrl = videoUrl ? this.addAutoplayParameter(videoUrl) : undefined;
    this.images = images;
    this.safeVideoUrl = this.getSafeVideoUrl();
    this.link = link;
  }

  private getSafeVideoUrl(): SafeResourceUrl | undefined {
    return this.videoUrl && this.sanitizer ? 
           this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl) : 
           undefined;
  }

  private addAutoplayParameter(url: string): string {
    // Ensure autoplay is set to 0
    return url.includes('?') ? `${url}&autoplay=0` : `${url}?autoplay=0`;
  }
}
