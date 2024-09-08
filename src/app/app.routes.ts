import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '', component: PortfolioComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent}
];
