import { Project } from './project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { of } from 'rxjs';  // if needed

describe('Project', () => {
  let sanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(() => {
    // Create a spy object for DomSanitizer
    sanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
  });

  it('should create an instance', () => {
    // Mock the return value of bypassSecurityTrustResourceUrl
    sanitizer.bypassSecurityTrustResourceUrl.and.returnValue('safeUrl' as SafeResourceUrl);

    // Initialize Project with mock sanitizer
    const project = new Project(
      'Test Project',
      'This is a test project description.',
      'https://www.youtube.com/embed/testvideo',
      '',
      ['image1.jpg'],
      sanitizer
    );

    expect(project).toBeTruthy();
    expect(project.headline).toBe('Test Project');
    expect(project.description).toBe('This is a test project description.');
    expect(project.videoUrl).toBe('https://www.youtube.com/embed/testvideo');
    expect(project.images).toEqual(['image1.jpg']);
    expect(project.safeVideoUrl).toBe('safeUrl' as SafeResourceUrl);
  });

  it('should handle empty videoUrl', () => {

    const project = new Project(
      'Test Project',
      'This is a test project description.',
      '',
      '',
      ['image1.jpg'],
      sanitizer
    );

    expect(project.safeVideoUrl).toBeUndefined();
  });
});
